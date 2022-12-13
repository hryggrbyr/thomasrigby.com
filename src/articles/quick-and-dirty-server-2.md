---
title: Quick and dirty server 2
layout: 'layouts/article.html'
tags: article
description: Sometimes you just want to serve a static site without installing all kinds of stuff (2022 Edition)
date: 2022-09-07
hero:
  size: full-bleed half-screen
  caption: true
  title: Quick and dirty server 2
  image:
    src: /images/david-clode-5uU8HSpfwkI-unsplash.jpg
    alt: A python
    credit:
      name: David Clode
      url: https://unsplash.com/@davidclode
---

I wrote last year about spinning up a [quick and dirty server](https://thomasrigby.com/articles/quick-and-dirty-server/) using [Python](https://www.python.org/).

Since then, I have moved to using Python 3 (woop woop!) and, the first time I ran my funky little `srv 1337` function I got an error! 😱

## "No module named SimpleHTTPServer"

According to the [Python 2.7 documentation](https://docs.python.org/2/library/simplehttpserver.html)&hellip;

> The SimpleHTTPServer module has been merged into http.server in Python 3.

So, the simple-enough solution is to replace `SimpleHTTPServer` with `http.server`.

1. Navigate to the folder you want to serve
2. `python -m http.server`
3. Open `http://localhost:8000`

### What if PORT 8000 is in use?

Pass a different port number like this: `python -m http.server %%PORT_NUMBER%%`

If you want it to be _even simpler_ - stick this somewhere in your bash config!

```bash
srv() {
  python -m http.server $1
}
```

As before, it doesn't come with any of the fancy stuff that other "local server" plugins might come with like hot reloading or compiling Scss but, if all you want is a small static site launching, why reach for another dependency?
