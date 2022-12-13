---
title: For modern development, Desktop and Mobile are not enough
layout: 'layouts/article.html'
tags: article
description: Different devices have different capabilities, using mobile to describe both narrow screens and touch screens is confusing and leads to assumptions that come back to bite us.
date: 2020-10-30
hero:
  size: full-bleed half-screen
  caption: true
  title: For modern development, &ldquo;Desktop&rdquo; and &ldquo;Mobile&rdquo; are not enough
  image:
    src: /images/halgatewood-com-WcYeiHMexR0-unsplash.jpg
    alt: Pile of smartphones
    credit:
      name: HalGatewood.com
      url: https://unsplash.com/@halacious
---

**We need to expand our vocabulary.**

Different devices have different capabilities, using mobile to describe both narrow screens and touch screens is confusing and leads to assumptions that come back to bite us.

If I dock my browser to half of my screen (which I do a lot) it's the same width as a portrait iPad but it doesn't have the same capability - I have hover states, for example.

Conversely, an iPad Pro is bigger than my laptop but has a touch screen.

- **Narrow screens** require adjusting layout
- **Touch capability** requires adjusting functionality

We don't require any extra designs, we need to think about whether this design works.

And, of course, use our new vocabulary to accurately maintain our products.

## I'll give you an example&hellip;

I'm currently working on a project - the frontend is responsive and the layout stacks according to the screen dimensions. On the homepage there is a carousel of cards where additional copy is displayed on hover. 

<video style="width: 100%; height: auto; aspect-ratio: 2444/1604;" width="244" height="160" poster="/images/show-hide-hover-demo.gif" controls>
  <source src="/images/show-hide-hover-demo.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

I was asked to make the additional copy <q>always visible on mobile</q>.

In this case, "mobile" is not correct. If I was to only target "narrow screens", the functionality is still broken on large touchscreens because the issue with this hidden copy is "hoverability", not screen size.

Showing/hiding the copy based on whether the screen is wider or narrower than 768px wouldn't solve the problem!

It's almost always a matter of education. A client is going to notice a bug on her iPhone and relay it as "on mobile". And that's absolutely fine; it's not her job to be aware of all of the nuance - it's ours.

The trick here is not to assume that _her_ definitition of "mobile" is identical to _your_ definition of "mobile" and plough ahead making changes. Consider what is causing the issue, maybe even ask whether it's caused by a narrow screen, touch or lack thereof. 

If you work with a client for any length of time, they'll cotton on and start to use the vocabulary. 

Everyone speaking the same language leads to less confusion, less faux pas, less re-fixing the same bug because we assumed wrong.
