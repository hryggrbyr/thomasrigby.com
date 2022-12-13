---
title: Pre- and Post- NPM Scripts
layout: 'layouts/article.html'
tags: article
description: I'm not a fan of chaining together lots of commands and, it turns out, neither are NPM!
date: 2021-01-04
hero:
  size: full-bleed half-screen
  caption: true
  title: Pre- and Post- NPM Scripts
  image:
    src: /images/npm.jpeg
    alt: A landscape of a lake between two hills
---

I've been working on a project at work recently that takes data from a CMS, builds into a React app, and bundles into an iOS app using CapacitorJS

```json
{
  "scripts": {
    "build": "react-scripts build",
    "harvest": "node harvest.js",
    "copy": "npx cap copy ios"
  }
}
```

It would be tedious to keep running `npm run harvest && npm run build && npm run copy` every single time.

I guess I could make a special case build script…

```json
{
  "scripts": {
    "build:ios": "npm run harvest && npm run build && npm run copy"
  }
}
```

I'm not a fan of long chains of commands and, it turns out, neither are NPM.

## Introducing `pre` and `post`!

```json
{
  "scripts": {
    "prebuild": "npm run harvest",
    "build": "react-scripts build",
    "postbuild": "npm run copy",
    "harvest": "node harvest.js",
    "copy": "npx cap copy ios",
  }
}
```

These suffixes can be added to any NPM script and will run automatically when you run the main script.

Now, whenever I `npm run build`, I get `npm run harvest` and `npm run copy` **for free!**

It saves my fingers, it stops me forgetting to copy my build folder to iOS, and it satisfies my compulsion for short, neat lines.

What could you do with this?
