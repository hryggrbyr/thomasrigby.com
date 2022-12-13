---
title: Generate a random alphanumeric string using JavaScript
layout: 'layouts/article.html'
tags: article
description: Today I had to send an "ID" in the body of my POST request. It turns out that the API doesn't care what the value is - it just needs to be alphanumeric, exactly 18 characters long, and not already in the system.
date: 2021-04-29
hero:
  size: full-bleed half-screen
  caption: true
  title: Generate a random alphanumeric string using JavaScript
  image:
    src: /images/gaelle-marcel-qKi_4JFVEME-unsplash.jpg 
    alt: Brown rope on grass
    credit:
      name: Gaelle Marcel
      url: https://unsplash.com/@gaellemarcel
---

Today I had to send an "`ID`" in the body of my POST request. It turns out that the API doesn't care what the value is - it just needs to be alphanumeric (a-z, A-Z, 0-9), exactly 18 characters long, and not already in the system.

So I decided to generate a random string<sup>*</sup>!

## Shut up already and give me the code!

```js
const randomString = (len = 1) => new Array(len*2).fill(1000).map((x) => Math.ceil(x * Math.random()).toString(36).charAt(0)).filter(Boolean).sort(() => Math.random() - 0.5).map((x,i) => i % 2 === 0 ? x.toUpperCase() : x).join('').substr(0,len)
```

## Now, let's break that down!

There's a lot going on in that one line!

Firstly, we create an `Array` with twice as many "characters" as we need.

Then we `fill` each item in the array with the number 1000.

For each of those items (`.map()`), we randomise the number by multiplying it by a randomly generated number between 0 and 1 (`x * Math.random()`). This is then converted into a two-character string. We only need the first character so let's grab that with `charAt(0)`. You could also use `[0]` as shorthand.

Now we have an Array of twice as many random alphanumeric characters as we asked for.

Just to be on the safe side, we remove any empty or falsey values using `.filter(Boolean)` - this will get rid of any zeroes but meh 🤷‍♀️

The remaining values are shuffled into a new random order with `.sort(() => Math.random() - 0.5)`.

Our new array is then looped through again and every even-index character is UPPERCASED (if possible - the numbers 0 to 9 cannot be uppercased).

Now we have an array of much more random characters, but this is `randomString` - what use is an array?! We need to `join('')` the array together. The `''` separator is necessary - without it our string would be full of commas - gross!

Finally, remember how the string is twice as long as we need? - we return the correct number of characters from the start of the string.

## Conclusion

So there it is! I have no idea how well it performs but you probably shouldn't be generating random strings in production anyway! 😬

What's this is probably most useful for is playing around with the individual components it's made up of:

- Fill: `Array.fill()`
- Shuffle: `Array.sort(() => Math.random() - 0.5)`
- Modulos: `i % 2 === 0`
- Remove 'falsey' values: `Array.filter(Boolean)`


<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="hryggrbyr" data-slug-hash="ExZGEKQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Generate a random Alphanumeric String using JavaScript">
  <span>See the Pen <a href="{{context.me.profile.codepen.url}}/pen/ExZGEKQ">
  Generate a random Alphanumeric String using JavaScript</a> by Thomas Rigby (<a href="{{context.me.profile.codepen.url}}">@hryggrbyr</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<aside>
  <sup>*</sup> A better solution to this problem is&hellip;
  
  ```js
    const id = btoa(new Date()).substr(0,18);
  ```
  
  &hellip;but where's the fun in that?! 😈
</aside>
