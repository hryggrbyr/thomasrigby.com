---
title: Formatting JSON.stringify()
layout: 'layouts/article.html'
tags: article
description: I occasionally find myself dumping stringified JSON into a &lt;pre/&gt; tag in my markup. It inevitably looks horrible. Here's how to prettify your JSON.stringify() output.
date: 2021-05-10
hero:
  size: full-bleed half-screen
  caption: true
  title: Formatting JSON.stringify()
  image:
    src: /images/hello-i-m-nik-6HzhFuiVO60-unsplash.jpg
    alt: 8-bit Jason Voorhees
    credit:
      name: Hello I'm Nik
      url: https://unsplash.com/@helloimnik
---

I occasionally find myself dumping stringified JSON into a `<pre/>` tag in my markup. It inevitably looks horrible. In the spirit of _If I write it down I won't forget it_, here's how to prettify your `JSON.stringify()` output.

I always forget that `JSON.stringify()` takes _three_ arguments:

1. The given object
1. An optional replacer
1. An optional spacing count

You can find more detail on the [MDN Web Docs for JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) but I'm getting into the habit of using this as my default stringify function…

```javascript
JSON.stringify(obj, null, 2);
```

Adding that `, null, 2`, turns this&hellip;

{% image '/images/formatting-json-stringify-before.png', 'Displayed stringified JSON without formatting' %}

&hellip;into this&hellip;

{% image '/images/formatting-json-stringify-after.png', 'Displayed stringified JSON with formatting' %}

## Bonus

Remember that `replacer`? You can narrow down what is displayed by dropping an array of keys in there instead of `null`.

```javascript
JSON.stringify(obj, ['phone'], 2);
```

{% image '/images/formatting-json-stringify-bonus.png', 'Displayed stringified JSON partial with formatting' %}

## Credits

The data displayed in the above screenshots is provided by [randomuser.me](https://randomuser.me/) which is an API for generating user data. They describe themselves as <q>Like Lorem Ipsum, but for people</q> and they're a really useful resource. #notsponsored.

I used the ever useful [QuokkaJS](https://quokkajs.com/) to run my `JSON.stringify` code. For those that don't know, <q>Quokka.js is a developer productivity tool for rapid JavaScript / TypeScript prototyping</q> and is available as a [VS Code plugin](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode). Again, not sponsored - just a fan! 😃
