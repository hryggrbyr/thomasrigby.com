---
title: I am a lazy developer or How to write 438 lines of nginx redirects
layout: 'layouts/article.html'
tags: article
description: I don't mean to imply that I cut corners and churn out shoddy code. I just hate doing repetitive tasks that bore the bejesus out of me.
date: 2021-06-07
hero:
  size: full-bleed half-screen
  caption: true
  title: I am a lazy developer &mdash; How to write 438 lines of nginx redirects
  image:
    src: /images/call-me-fred-pPyHkWYSFbk-unsplash.jpg
    alt: Diverted Traffic
    credit:
      name: Call Me Fred
      url: https://unsplash.com/@callmefred
---

When I say "I am a lazy developer", I don't mean to imply that I cut corners and churn out shoddy code. I just hate doing repetitive tasks that bore the bejesus out of me!

Obviously, I'm not alone in this - it's the reason [task runners](https://www.smashingmagazine.com/2016/06/harness-machines-productive-task-runners/) exist.

Recently, at work, I replatformed an existing e-commerce site which resulted in, amongst other things, a giant list of redirects from existing urls to the new url structure.

[Permanent redirects (301s for the people who like numbers) are essential for persistence of good SEO](https://moz.com/learn/seo/redirection). The downside is adding the old url and the new url to the line `rewrite ^/<oldlocation>$ <newlocation> permanent;` in my nginx config file. What's a lazy guy to do when you have to do this 438 times&hellip;?

Well, this immediately looks like a case for loops and variables!

## How can _you_ do this wizardry?!

You'll need four things;

1. [NodeJS](https://nodejs.org/en/) installed on your machine,
2. a command-line application like Hyper, iTerm2, or Terminal,
2. a CSV file of the required redirects, and
3. this handy class in an `index.js` file.

```bash
// excel.csv

old,new
https://thomasrigby.com/newyork/, https://thomasrigby.com/locations/newyork/
https://thomasrigby.com/paris/, https://thomasrigby.com/locations/paris/
https://thomasrigby.com/peckham/, https://thomasrigby.com/locations/peckham/
```

```js
// index.js

const fs = require('fs');

class GenerateNginxRedirectsFromCSV {
  constructor(input, output) {
    this.input = input || './input.csv';
    this.output = output || './output.txt';
    this.csv = null;
    this.results = [];
  }

  async read() {
    this.csv = await fs.readFileSync(this.input, { encoding: 'utf8', flag: 'r' });
  }

  async format() {
    this.results = this.csv.replace(/\n/g, '').split('\r').filter(Boolean).slice(1).map((x) => `rewrite ^/${x.split(',')[0]}?$ ${x.split(',')[1]} permanent;\n` );
  }

  write() {
    this.results.forEach(async (value) => {
      await fs.appendFileSync(this.output, value);
    });
  }

  async init() {
    await this.read();
    await this.format();
    await this.write();
  }
}

const task = new GenerateNginxRedirectsFromCSV('./excel.csv', './redirects.txt');
task.init();


```

Put both files in the same folder, open the folder in your command line Terminal application and run `node ./`. This will generate a file (called `output.txt` unless you've changed it) listing your redirects in an easy-to-copypasta format. Paste the contents into your `nginx.conf` file.

## Cool! How does it work?

There's a lot going on here so let's go through it.

```js
const fs = require('fs');
```

[fs](https://nodejs.org/api/fs.html) is the NodeJS File System module. I won't go into detail here but, basically, it allows you to _Read from_ and _Write to_ files on your local system, servers, or whereever Node is installed.

```js
constructor(input, output) {
  this.input = input || './input.csv';
  this.output = output || './output.txt';
  this.csv = '';
  this.results = [];
}
```

In the constructor, we set our scoped variables (including fallbacks) and the empty variables that will be populated by our fetched and formatted data.

```js
async init() {
  await this.read();
  await this.format();
  await this.write();
}
```

As we can see from the `init()` function, our three basic steps are;

1. Get the contents of the CSV file
2. Convert it into a format nginx can understand
3. Write the results to a file

### Step 1 - Get the contents of the CSV

```js
this.csv = await fs.readFileSync(this.input, { encoding: 'utf8', flag: 'r' });
```

Read the input filepath and save the contents into the `this.csv` variable for later use.

### Step 2 - Convert CSV to nginx

Since the output of the csv file is consistent, and so is the format of a JSON object, we can map one to the other.

```js
async format() {
  this.results = this.csv.replace(/\n/g, '').split('\r').filter(Boolean).slice(1).map((x) => `rewrite ^/${x.split(',')[0]}?$ ${x.split(',')[1]} permanent;\n` );
}
```

Firstly, replace any `\n` line-endings, then explode the string into an array at each line-break (`\r`).

Then, we generate an array of results.

- Filter out any empty lines with `.filter(Boolean)`
- Remove the line with the headers using `.slice(1)`
- For each remaining line, generate a string to copy into `nginx.conf`.

It should look a little like this;

```bash
rewrite ^/https://thomasrigby.com/newyork/?$  https://thomasrigby.com/locations/newyork/ permanent;
```

### Step 3 - Write the output file

Now that `this.results` is an array of strings, we can 

- loop through each instance
- insert the result to an ouput file using _fs_.

All that's left to do is open the resulting file and copypasta the content into your `nginx.conf` file.

Don't forget to gracefully restart the nginx server. Forgetting this has caused me untold headaches!

```bash
nginx -t && nginx service restart
```

## Conclusion
Now, I'm sure there are ~~different~~ better ways to do this but, off the top of my head, this seemed quick and simple enough to whip together.

I've no idea how long it would have taken me to manually do this but I'm certain it would have taken longer than to write this bit of code.

Not only did I save myself time on that particular day, whenever I (or someone else on my team) need to do this again I have a useful tool to reuse again and again 😎
