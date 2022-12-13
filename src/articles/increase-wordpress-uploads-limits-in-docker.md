---
title: Increase WordPress maximum upload limit in Docker
layout: 'layouts/article.html'
tags: article
description: "&quot;filename exceeds the maximum upload size for this site&quot; 🙄"
date: 2021-03-31
hero:
  size: full-bleed half-screen
  caption: true
  title: Increase WordPress maximum upload limit in Docker
  image:
    src: /images/daniel-von-appen-v9B_fRs1zdw-unsplash.jpg
    alt: A stack of VHS cassettes
    credit:
      name: Daniel von Appen
      url: https://unsplash.com/@daniel_von_appen
---

I've recently moved over to using [Docker](https://www.docker.com/) to manage my WordPress builds. It has many advantages and, the more comfortable I get, relatively few disadvantages. Not sponsored or anything, it's just boss!

One thing I find happens **every single time** is trying to upload an image into the Media Library and getting the "filename exceeds the maximum upload size for this site" error.

{% image '/images/exceeds-maximum-upload.png', 'filename exceeds the maximum upload size for this site' %}

Inevitably, I find myself sticking `docker wordpress increase upload limit` into Bing (yes, [Bing](https://www.bing.com/)). There are a few answers knocking around - some of which I can get to work, some of which I can't.

This is the solution that I find works for me. I'm posting it here to save myself an hour of Googling next time! 😅

## Step 1: `uploads.ini`

Firstly, create an `uploads.ini` file in your project. I like to keep mine in a specific `config` folder with my `.htaccess` file.

## Step 2: Add your options

In the `uploads.ini` file, add the following:

```bash
upload_max_filesize = 16M
post_max_size = 24M
```

Feel free to change the values to suit your needs.

## Step 3: Include your file

The file now needs mounting using [volumes](https://docs.docker.com/storage/volumes/).

If you're using `docker-compose`, it will look a little something like this:

```yaml
version: '3.1'

services:
  wordpress:
    image: wordpress:5.7.0-php7.3-apache
    restart: always
    ports:
      - 80:80
    environment:
    volumes:
      - ./config/uploads.ini:/usr/local/etc/php/conf.d/uploads.ini
      - ./www/themes:/var/www/html/wp-content/themes:delegated
      - ./www/plugins:/var/www/html/wp-content/plugins:delegated

volumes:
  wordpress:
```

## And that's it!

Start or restart Docker and you'll no longer get nasty errors when you try to upload that massive photo.

Just be aware that upload limits exist for good reason - nobody wants to have to download a tonne of 10Mb 1920&times;1080 images that are only going to be used as 300px thumbnails…
