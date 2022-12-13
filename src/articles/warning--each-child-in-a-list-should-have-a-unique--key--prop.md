---
title: Each child in a list should have a unique "key" prop
layout: 'layouts/article.html'
tags: article
description: Fix this common React error without dependencies
date: 2020-11-27
hero:
  size: full-bleed half-screen
  caption: true
  title: Each child in a list should have a unique "key" prop
  image:
    src: /images/pdpvai3wpmsll9599z1l.png
    alt: A error message in React console
---

To prevent ugly errors in your console when you loop through an array, React likes you to use a _unique key_ for each child element.

We usually use the loop index. This is not advised for several reasons<sup>1, 2</sup>.

Instead try this…

`Math.random().toString(36).substr(2, 9)`

This will give you a (fairly) random 9-character alphanumerical string.

{% image '/images/dlmsi1y8sopq6k595kjv.png', 'Example code' %}

``` jsx
<ul>
    { items.map(x => <li key={ Math.random().toString(36).substr(2, 9) }>{x}</li> }
</ul>
```

This is useful for "throwaway" keys. If you're going to be referencing the keys in any way, you need to use a unique property (like an `ID` or `slug`).


<hr/>

<sup>1</sup> [React Docs say so](https://reactjs.org/docs/lists-and-keys.html)



<sup>2</sup> [Stack Overflow Bros say so](https://stackoverflow.com/questions/46735483/error-do-not-use-array-index-in-keys)