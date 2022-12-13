---
layout: 'layouts/article.html'
tags: article
title: The semantics of interaction vs navigation
description: It is commonplace for designers to style both links and buttons to look like “buttons”. But just because something looks like a button, doesn’t mean it is a &lt;button&gt;.
date: 2020-12-07
hero:
  size: full-bleed half-screen
  caption: true
  title: The semantics of interaction vs navigation
  image:
    src: /images/62ddf7754a991f67c759523fdff57511b7a0cd07bbbe6b6547ecefcc771bd120.png
    alt: Chain links
---

It is commonplace for designers to style both links and buttons to look like “buttons”. But just because something *looks* like a button, doesn’t mean it *is* a `<button>` .

The general rule is to use `<button onClick="function()">` to control in-page interaction and `<a href="/path/to/link-destination">` to control navigation to a different page<sup>†</sup>.

Examples of where to use a button element include toggling an off-canvas menu or loading more posts. If you are navigating to a different page - use an anchor link.

Never, ever, ever do this:

``` html
<button
  onClick="function(){ window.location.href = '/path/to/new/page.html' }"
>
  Click me
</button>
```

Assistive technologies will announce button and link elements differently and they can be activated in different ways depending on the element - use the wrong one and you run the risk of confusing the user.

---

<sup>†</sup> The in-page “anchor” link is an exception to this. Always use an `<a href="#anchor-link">` tag for that even though the user doesn’t leave the page. This is because it will modify the URL and helps the user find the content.

Again, the same effect can be achieved using JavaScript to manipulate the Browser History API but why would you write extra code to recreate something the browser gives you for free?!

Oh, and if you're missing the "smooth scrolling" that you can add with JavaScript, consider the [fairly well-supported `scroll-behavior: scroll;` property](https://caniuse.com/css-scroll-behavior).
