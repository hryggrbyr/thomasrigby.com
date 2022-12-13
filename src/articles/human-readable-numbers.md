---
title: Human-readable Numbers
layout: 'layouts/article.html'
tags: article
description: Convert a JavaScript number to a human-readable number the easy way.
date: 2021-01-20
hero:
  size: full-bleed half-screen
  caption: true
  title: Human-readable Numbers
  image:
    src: /images/numbers.jpeg
    alt: A jumble of foam numbers
---

I recently came across a situation where I was required to add two numbers before displaying them on the frontend.

Here is a (very) simplistic example…
```javascript
  const valueA = 12300
  const valueB = 45.67
  const numberToDisplay = valueA + valueB // 12345.67
```

The trouble was, the client didn't like the way the number was displayed - `12345.67` felt _"too computer-y"_ 😂

I'm old enough to remember having to write a function that counted the number of digits in the string and insert commas (or fullstops) in the relevant places but I thought to myself: 

> "Hey, it's 2021! JavaScript is better now! There must be an easier way!"

So, a little bit of searching later - [`Number.prototype.toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)!!! 🎉

This handy method will convert a given `Number` into a human-readable `String` based on a given language.

In this handy utility function, we format the given value based on the `lang` attribute on the `<html/>` element unless one is explicitly provided.

```javascript
const humanReadableNumber = (value, lang = null) => {
  if (!value) return;
  const locale = lang || document.documentElement.lang || 'en'
  const number = parseFloat(value, 10)
  return number.toLocaleString(locale);
}
```

So, using our example from before…

```javascript
  const valueA = 12300
  const valueB = 45.67
  const numberToDisplay = humanReadableNumber(valueA + valueB) // 12,345.67
```

If you want to have a play around, I made a CodePen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="hryggrbyr" data-slug-hash="PoGLMdE" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Human-readable number">
  <span>See the Pen <a href="{{context.me.profile.codepen.url}}/pen/PoGLMdE">
  Human-readable number</a> by Thomas Rigby (<a href="{{context.me.profile.codepen.url}}">@hryggrbyr</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Hope this is as useful for you as it was for me! 😎
