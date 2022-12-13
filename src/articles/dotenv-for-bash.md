---
title: Dotenv for bash
layout: 'layouts/article.html'
tags: article
description: Sometimes you need to access <code>process.env</code> in a bash script&hellip;
date: 2021-10-07
hero:
  size: full-bleed half-screen
  caption: true
  title: dotenv for bash
  image:
    src: /images/gabriel-heinzer-4Mw7nkQDByk-unsplash.jpg
    alt: Command line terminal
    credit:
      name: Gabriel Heinzer
      url: https://unsplash.com/@6heinz3r
---

I have, on occasion, had to use the same secret variables in my codebase (JavaScript) and my build scripts (Bash).

## Shut up and show me the code!

```bash
export $(egrep -v '^#' .env | xargs)
```

## Back to the beginning

A common pattern to keep some variables hidden from prying eyes involves storing them in an `.env` file in the root of your project **and not committing it to your repository**.

```bash
# .env
SUPER_SECRET_API_KEY=q1we2rty3uiop4

#.gitignore
.env
.env*
!.env-example
```

Using the extremely popular [dotenv](https://www.npmjs.com/package/dotenv) npm package allows us to reference the variables in our codebase.

```javascript
const { SUPER_SECRET_API_KEY } = process.env;
// or
const key = process.env.SUPER_SECRET_API_KEY;
```

This is great! And it works really well!

One of the things I use `.env` for is defining my environment locally. When I deploy my code through the CI Pipeline, this environment variable is available without me defining it: `ENV=production` or `ENV=development`. Exposing this to my codebase using _dotenv_ allows me to do stuff like;

```javascript
  const { ENV } = process.env;

  if (ENV === 'production') {
    // Do production version
  } else {
    // Do non-prod version
  }
```

As it happens, I also use my `ENV` variable in bash scripts, for example;

```bash
  # start.sh

  if [ $(ENV) = 'production' ]; then
    # Run the build-production script
    # This will strip logs, minify, uglify, and all that good stuff
  else
    # Run the watch script
  fi
```

```bash
  ENV=production bash start.sh
```

Notice how I have to define `ENV` inline here. That's because bash can't read the `.env` file.

If you wanted to permanently expose that variable to bash (so you don't have to type it out every single time), you would `export` it;

```bash
  export ENV = production

  echo $ENV   # production
  echo $(ENV) # production
```

This is all well and good&hellip; until you have 5, 10, 100 variables to export! 🙄

Enter the handy snippet! 🎉

```bash
  export $(egrep -v '^#' .env | xargs)
```

By looping through every line in the `.env` file and `export`ing it as a bash variable (unless, of course, it begins with a `#` - that's a comment 😁), we can save ourselves, potentially hours of typing!
