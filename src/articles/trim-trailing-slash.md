---
title: Trim trailing slash
layout: 'layouts/article.html'
tags: article
description: Sometimes a URL has a trailing slash, sometimes it doesn't. If we can't be certain, we need to handle either eventuality.
date: 2022-09-01
hero:
  size: full-bleed half-screen
  caption: true
  title: Trim trailing slash
  image:
    src: /images/bere-del-valle-OQ0-cv18RyY-unsplash.jpg
    alt: silver scissors on pink surface
    credit:
      name: Bere del Valle
      url: https://unsplash.com/@beredelvallephoto
---

Sometimes a URL has a trailing slash, sometimes it doesn't. If we can't be certain, we need to handle either eventuality.

## Shut up and give me the code!

```javascript
const trimTrailingSlash = (x) => x.split('').reverse()[0] !== '/' ? x : x.substring(0,x.split('').length -1);
```

## Let's break that down

First off we're creating an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) that will accept an input that we're calling `x`.

Inside the function, `x` is `split` into individual characters creating an array. The array is reversed using, well, `reverse()`. This means we can check the _first_ character (`[0]`) instead of having to work out what the _last_ character is - smart!

If that character does not equal (`!==`) a slash simply return the given string. Bouncing out of a function as soon as possible keeps our code quick!

If the character is a trailing slash, we want to get rid of it; to return part of a string, we can use `substring`.

Substring takes two parameters: the starting index and the finishing index. We will start at `0` which is the very first character and finish with the second to last character (the one before the `/`).

To figure what that number is we, again, `split` the string into an array and use the total number of items (`.length`) minus 1.

## Alternative solution!

Using [`String.prototype.endsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) and [`String.prototype.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice), we can shorten this function - and make it a little more readable! 🎉

```javascript
  const trimTrailingSlash = (x) => x.endsWith('/') ? x.slice(0,-1) : x;
```

`.endsWith()` works exactly how you would imagine: if the string _ends with_ the given character, the method returns `true`, otherwise it returns `false`.

## Conclusion

To trim a trailing slash from a URL requires two operations; 

1. We must determine if the last character is a slash
1. If it is, we must remove the slash

Each of these steps can be performed in several ways, you can mix-and-match them how you want.

I've not done any performance testing on these so I couldn't tell you which is fastest when trimming the trailing slash from 40,000 URLs but, unless you _are_ working with 40,000 URLs, just pick the one you feel is the most readable.
