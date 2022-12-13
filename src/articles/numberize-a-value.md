---
title: Numberize a value
layout: 'layouts/article.html'
tags: article
description: If you get a CSS value but you want to do maths with it, what do you do? Let's find out!
date: 2021-03-04
hero:
  size: full-bleed half-screen
  caption: true
  title: Numberize a value
  image:
    src: /images/mika-baumeister-Wpnoqo2plFA-unsplash.jpg
    alt: A series of digits
    credit:
      name: Mika Baumeister
      url: https://unsplash.com/@mbaumi
---

If you get a CSS value but you want to do maths with it, what do you do?

```js
const width = window.getComputedStyle(document.body, null).getPropertyValue('width'); // 960px
document.body.style.width = (width / 2); // NaN
```

Oh noes! 😖

I guess we could use the CSS `calc()` syntax…

```js
document.body.style.width = `calc(${width} / 2)`; // <body style="width: calc(960px / 2);">
```

This is all well and good for simple calculations like that but what happens when we start getting spicy?

```js
const padding = window.getComputedStyle(document.body, null).getPropertyValue('padding'); // 8px
const margin = window.getComputedStyle(document.body, null).getPropertyValue('margin'); // 32px
document.body.style.width = `calc(calc(${width} / 2) + calc(${padding} + calc(${margin} * 0.5))`;  // <body style="width: calc(calc(960px / 2) + calc(8px + calc(32px * 0.5)));">
```

Ew! Gross! 🤮

What you _actually_ want is to be able to treat that string like a real number, right?

## Make that string an integer

A fun quirk/feature of JavaScript is that `parseInt()` and `parseFloat()` can be used on any string that _starts_ with a number and it will just magically work!

```js
document.body.style.width = (parseInt(width, 10) / 2) + (parseInt(margin, 10) * 0.5) + parseInt(padding, 10) + 'px'; // <body style="width: 504px;">
```

The magic here is JavaScript's _Type Inference_ - it's doing a lot of the heavy lifting in assuming that - because you're "parsing an integer" - the string passed **is an integer**.

Again, this works but I, for one, don't like things to run off assumptions. And, no, rewriting the application in TypeScript isn't going to happen, Reply Guy!

## Make that string _definitely_ an integer

If you just want the code, here you are…

```js
const numberizeValue = (input) => parseFloat(input.split('').filter(x => !x.match(/[0-9.]/g)).join(''), 10);
```

### Now, let's break that down!

Firstly, we're going to use `parseFloat()` because it will allow us to "numberize" numbers with decimal places. We're going to assume our numbers are decimal and return the result using Base 10.

Next, we explode the provided string into an array with `input.split('')`. The use of `''` gives us an array of individual characters.

We can now filter the array to remove any characters that are _not_ numbers using `.filter(x => !x.match(/[0-9.]/g)`. The RegEx in the `match` function is looking for decimal numbers between _0_ and _9_, and the full-stop/period character.

Now the array has been stripped of letters and (most) punctuation, we can `join` the array back into a string to be parsed.

{% image '/images/numberizeValues-examples.png', 'numberizePixels examples' %}



