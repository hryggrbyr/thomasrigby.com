---
title: How to create a global .gitignore file to define a list of rules for ignoring files in every single Git repository on your computer
layout: 'layouts/article.html'
tags: article
description: How to create a global .gitignore file to define a list of rules for ignoring files in every single Git repository on your computer
date: 2021-08-06
hero:
  size: full-bleed half-screen
  caption: true
  title: Global .gitignore
  image:
    src: /images/roman-synkevych-wX2L8L-fGeA-unsplash.jpg
    alt: GitHub's Octocat logo
    credit:
      name: Roman Synkevych
      url: https://unsplash.com/@synkevych
---

Unfortunately, this has happened to the best of us at some point, amirite?!

{% image '/images/ignore-node-modules.png', 'Screenshot of GitKraken showing a new git ignore file and 30,383 deleted files in the node modules folder' %}

Inspired by this monstrosity, I decided to do some investigation!

Here is how to create a global `.gitignore` file to define a list of rules for ignoring files in _**every single**_ Git repository on your computer…

```bash

  touch ~/.gitignore_global
  echo node_modules >> ~/.gitignore_global
  echo .DS_Store >> ~/.gitignore_global
  echo .vscode >> ~/.gitignore_global
  git config --global core.excludesfile ~/.gitignore_global

```

For more handy git tips: [RTFM 😉](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files#configuring-ignored-files-for-all-repositories-on-your-computer)
