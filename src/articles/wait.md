---
title: Wait!
layout: 'layouts/article.html'
tags: article
description: Why the rush? Whether you're faking an API response, introducing deliberate cognitive drain, or simply want to slow things down this function has got you, baby!
date: 2021-04-19
hero:
  size: full-bleed half-screen
  caption: true
  title: Wait!
  image:
    src: /images/alex-OMF0olQno6M-unsplash.jpg
    alt: pedestrian signage displaying wait
    credit:
      name: Alex
      url: https://unsplash.com/@worthyofelegance
---

Why the rush&hellip;?!

Whether you're faking an API response, introducing deliberate cognitive drain, or simply want to slow things down this utility function has got you, baby! 😎

```js
const delay = ms => new Promise(rv => setTimeout(rv, ms))
```

## Cool! How do I use it?

```js
delay(500).then(() => console.log(`hello world`))
```

Nice! Does it work with `async/await`?

Heck, yes, it does!

```js
const functionName = async () => {

  doFirstThing()

  await delay(500)

  doNextThing()
}
```
