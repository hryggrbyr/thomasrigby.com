---
title: Gutenberg Components - "I only need one"
layout: 'layouts/article.html'
tags: article
description: Gutenberg comes with an awful lot of default components most of which will never be used in our websites. Here's how to disable the ones you won't use.
date: 2019-04-12
hero:
  size: full-bleed half-screen
  caption: true
  title: Gutenberg Components - "I only need one"
  image:
    src: /images/scaramanga.png
    alt: A jumble of foam numbers
---

Gutenberg comes with an awful lot of default components (see list below) most of which will never be used in our websites.

It's perfectly possible to just leave them there but this has the potential for disaster.

Leaving them visible to the content manager raises two possibilities;

1. It will be difficult for them to find the actual component they want to use
2. They will try to use a component that we haven't styled which will break the layout on the frontend

So, what do we do...?

## Only show the components you will actually use

Drop this into your `functions.php` file or, better yet, write a plugin to handle it 😎

``` php
add_filter('allowed_block_types', 'txb_allowed_block_types', 10, 2);

function txb_allowed_block_types( $allowed_blocks, $post )
{
    $allowed_blocks = array(
      'core/image', // Add the blocks you want here...
      'core/paragraph',
      'core/heading',
      'acf/videum' // Add your custom blocks here
    );

    return $allowed_blocks;

}
```

## Gutenberg Default Components
- Paragraph
- Heading
- Image
- List
- Quote
- Gallery
- Audio
- Cover
- File
- Video
- Code
- Preformatted
- Classic Block
- Custom HTML
- Pullquote
- Table
- Verse
- Columns
- Separator
- Button
- Media & Text
- More
- Page Break
- Spacer
- Shortcode
- Archives
- Categories
- Latest Comments
- Latest Posts
- Embed
- Twitter
- YouTube
- Facebook
- Instagram
- WordPress
- SoundCloud
- Spotify
- Flickr
- Vimeo
- Animoto
- Cloudup
- CollegeHumor
- Crowdsignal
- Dailymotion
- Funny or Die
- Hulu
- Imgur
- Issuu
- Kickstarter
- Meetup.com
- Mixcloud
- Photobucket
- Reddit
- ReverbNation
- Screencast
- Scribd
- Slideshare
- SmugMug
- Speaker Deck
- TED
- Tumblr
- VideoPress
- WordPress.tv