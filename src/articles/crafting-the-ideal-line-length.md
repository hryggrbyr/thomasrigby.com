---
title: Crafting the ideal line-length
layout: 'layouts/article.html'
tags: article
description: How to achieve the ideal line length using css.
date: 2020-12-04
hero:
  size: full-bleed half-screen
  caption: true
  title: Crafting the ideal line-length
  image:
    src: /images/line-length.png
    alt: A subway train waits in Torrent Avinguda Station, Valencia
---

Robert Bringhurst, in [The Elements of Typographic Style](https://www.amazon.com/Elements-Typographic-Style-Robert-Bringhurst/dp/0881792063/ref=sr_1_1?ie=UTF8&qid=1317888735&sr=8-1), puts a comfortable line-length between 45 and 75 characters. Thanks to the [well-supported css value `ch`](https://caniuse.com/#feat=ch-unit) we can achieve this much more simply than before.

Declaring the `font-size` in `rem` (relative elastic measurements) means that [all of the users who change their font size in the browser](https://nicolas-hoizey.com/2016/03/people-don-t-change-the-default-16px-font-size-in-their-browser.html) will have this change reflected in your website. In addition, using `rem` for other values (such as padding and margins) will adjust these in accordance making for a more fluid and, ultimately, more comfortable experience.

Finally, add to this a generous line-height (leading) to give the user enough negative space to comfortably read the content. These values are declared in `em` (elastic measurements) which means they will take their base value from the font-size of the element they have been applied to (as opposed to the `rem` which takes its base value from the font-size on the `<html>` element). `em` will help with maintenance in the future as values need only be changed in one place instead of two or three - nobody wants a 32px font on an 18px line-height!

``` css
p {
  display: block;
  width: 100%;
  max-width: 67ch;
  font-size: 1rem;
  line-height: 1.5em;
}
```

With headings, the principles remain the same though the values change. Headings should be larger than regular body copy to provide visual feedback that this is a delineator - marking the start of a new section of content.

``` css
h2 {
  display: block;
  width: 100%;
  font-size: 1.25rem;
  max-width: calc(67ch / 1.25);
  line-height: 1.5em;
}
```

To ensure all of your typographical elements have a nice comfortable space around them, use [Heydon Pickering](http://twitter.com/@heydonworks)'s [Lobotomised Owl Selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/)!

``` css
*+* {
  margin-top: 1.5em;
}
```

## Conclusion
For larger blocks of text (think article body copy or legal pages), these settings provide a comfortable experience for the great majority of readers.