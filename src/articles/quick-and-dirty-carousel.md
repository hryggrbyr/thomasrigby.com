---
title: Quick and dirty carousel
layout: 'layouts/article.html'
tags: article
description: AKA Move the first item in an array to the end repeatedly
date: 2021-04-13
hero:
  size: full-bleed half-screen
  caption: true
  title: Quick and dirty carousel
  image:
    src: /images/mitya-ivanov-tcxB_Y5WeQw-unsplash.jpg
    alt: people riding carousel during daytime
    credit:
      name: Mitya Ivanov
      url: https://unsplash.com/@aka_opex
---

One thing I find myself looking up time and time again, is;

> How do I move the first item of an array to the end? 🤔

So, in the spirit of _If I write it down, I'll never forget it_, here's a quick and dirty carousel that does just that.

```javascript

const duration = 5000

const carousel = document.querySelector('[data-carousel]')

const slides = [...carousel.querySelectorAll('[data-slide]')]

const initCarousel = (carousel, slides) => {
  slides.push(slides.splice(0,1)[0])
  carousel.innerHTML = ''
  carousel.insertAdjacentElement('afterbegin', slides[0])
}

setInterval(() => initCarousel(carousel, slides), duration)

```

## Let's break that down&hellip;

First we set the duration, 5000 milliseconds (5 seconds) should be good enough.

```javascript
const duration = 5000
```

Next, identify your elements. Your common or garden carousel consists of a container (`<div data-carousel />` in this case) and some slides (`<article data-slide />` in this case).

```javascript
const carousel = document.querySelector('[data-carousel]')

const slides = [...carousel.querySelectorAll('[data-slide]')]
```

Now, here's where the magic happens!

We have a smol function that moves the first item in the array to the end of the array then replaces the entire `innerHTML` of the container with the first slide in the array.

```javascript
const initCarousel = (carousel, slides) => {
  slides.push(slides.splice(0,1)[0])
  carousel.innerHTML = ''
  carousel.insertAdjacentElement('afterbegin', slides[0])
}
```

Finally, we run the function over and over again, every 5 seconds…
```javascript
setInterval(() => initCarousel(carousel, slides), duration)
```

## Conclusion

And that's it!

OK, sure, it doesn't have any fancy transitions but hopefully I'll remember the magic formula! 🙏

```javascript
arr.push(arr.splice(0,1)[0])
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="hryggrbyr" data-slug-hash="xxgWQoj" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Quick and dirty carousel">
  <span>See the Pen <a href="{{context.me.profile.codepen.url}}/pen/xxgWQoj">
  Quick and dirty carousel</a> by Thomas Rigby (<a href="{{context.me.profile.codepen.url}}">@hryggrbyr</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
