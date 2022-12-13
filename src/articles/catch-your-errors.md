---
title: Catch your errors
layout: 'layouts/article.html'
tags: article
description: If there's one thing I've learned, it's that your code will go wrong. You need to accept that and catch your damn errors!
date: 2021-07-05
hero:
  size: full-bleed half-screen
  caption: true
  title: Catch your errors
  image:
    src: /images/diana-polekhina-w1sYdquxs-I-unsplash.jpeg
    alt: Gloved hand holding a baseball
    credit:
      name: Diana Polekhina
      url: https://unsplash.com/@diana_pole
---

All too often I have seen (and written) code that looks like this&hellip;

```js
  const response = await getSomeDataFromAnAPI();
  handleTheHappyPath(response)
```

Invariably, at some point, the API is down or the response is malformed or my internet connection drops off or some other reason I haven't thought of and my `handleTheHappyPath()` function simply doesn't work.

Troubleshooting errors is tricky at the best of times but it's even harder if your code is not set up to handle errors.

Here are a few different ways to handle failures. Which one you should use will depend on a variety of things such as the existing codebase, when you want to handle the failure, or what you need to do in your `handleTheHappyPath` function.

## Try/Catch
```js
try {
  const response = await getSomeDataFromAnAPI();

  if (!response.ok || response.statusCode > 299) {
    throw new Error(response.statusText);
  }
  handleTheHappyPath(response)
} catch(error) {
  console.error('🚫  Oh noes!', error);
}
```

## Then
```javascript
  getSomeDataFromAnAPI()
  .then(response => {
    if (!response.ok || response.statusCode > 299) {
      throw new Error(response.statusText);
    }
    handleTheHappyPath(response)
  })
  .catch(error => {
    console.error('🚫  Oh noes!', error);
  })
```

## Await
```javascript
  const response = await getSomeDataFromAnAPI();
  handleTheHappyPath(response)

  response().catch((error) => {
    console.error('🚫  Oh noes!', error);
  })
```
