---
title: Quick and dirty server
layout: 'layouts/article.html'
tags: article
description: Sometimes you just want to serve a static site without installing all kinds of stuff
date: 2021-03-11
hero:
  size: full-bleed half-screen
  caption: true
  title: Quick and dirty server
  image:
    src: /images/david-clode-yrcaXCWe0VY-unsplash.jpg
    alt: A python
    credit:
      name: David Clode
      url: https://unsplash.com/@davidclode
---

I often find myself working on proof of concepts that consist of (at most) an `index.html`, `style.css`, and `index.js`.

It always seems overkill to have some kind of "local server" plugin imported into the project - especially because I use a MacBook Pro and it has [Python](https://www.python.org/) installed by default.

A neat little trick for serving a static site without additional dependencies is this…

1. Navigate to the folder you want to serve
2. `python -m SimpleHTTPServer`
3. Open `http://localhost:8000`

What if PORT 8000 is in use?

Pass a different port number like this: `python -m SimpleHTTPServer %%PORT_NUMBER%%`

If you want it to be _even simpler_ - stick this somewhere in your bash config!

```bash
srv() {
  python -m SimpleHTTPServer
}
```

It doesn't come with any of the fancy stuff that other "local server" plugins might come with like hot reloading or compiling Scss but, if all you want is a small static site launching, why reach for another dependency?



