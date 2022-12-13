---
title: Semantic HTML
layout: 'layouts/article.html'
tags: article
description: Semantic HTML is the process of using HTML5 tags to reinforce the meaning of the information contained within a webpage or application.
date: 2021-06-11
hero:
  size: full-bleed half-screen
  caption: true
  title: Semantic HTML
  image:
    src: /images/valery-sysoev-p9OkL4yW3C8-unsplash.jpg
    alt: Computer monitor display HTML code
    credit:
      name: Valery Sysoev
      url: https://unsplash.com/@valerysysoev
---

Semantic HTML is the process of using HTML5 tags to reinforce the meaning of the information contained within a webpage or application.

[HTML5](https://en.wikipedia.org/wiki/HTML5) was introduced in October 2014 and introduced several new element tags to provide *explicit* meaning to the content of a website. And, as all websites are *nothing more* than a means for conveying content, this is the most important foundation for any site.

Bluntly, semantic HTML says what an element is instead of using a `<div>` for everything.

## Div Soup™️

Consider this piece of code&hellip;

```jsx
<div class="article">
	<img class="image" src={post.image.src} />
	<h1 class="h1">{post.title}</h1>
	<div class="content">
    {post.excerpt}
  </div>
  {post.categories.map(category => <div class="category-tag">{category}</div>)}
</div>
```

While this is not an unacceptable way of using markup to describe a group of elements, it could also be confusing for a number of reasons.

We spend considerably more time reading code than writing it. A lot of us do not have the luxury of solely working with familiar code; we work in teams with several developers working on the same codebase or in agencies working with multiple codebases - some a lot older or less maintained.

While we read, much like users on a webpage do, we use an [F pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/). This means we’re basically scanning down the left-hand edge of the code to get a gist of what we’re dealing with.

The code above reads very much like “div, img, h1, div, div, div&hellip;”

## Semantic markup

Now consider this refactored code&hellip;

```jsx
<article>
  <header>
    <figure>
      <img src={post.image.src} alt={post.image.alt} />
    </figure>
    <h1>{post.title}</h1>
  </header>
  <div>
    {post.excerpt}
  </div>
  <footer>
    <ul>
      {post.categories.map(category => <li>{category}</li>)}
    </ul>
  </footer>
</article>
```

Now the code above reads like “article, header, div, footer”.

In all honesty, it does require more markup than the previous example but, on the other hand, when we scan the code we can clearly see that this is an article with a header image and a title - there is a main body to the article, followed by a list of categories. 

## Accessibility

Your browser will scan through your website's DOM and decide if each node it encounters is useful and, if so, will add it to the Accessbility Tree.

Screen-readers and other assistive technologies then use the Accessibility Tree instead of the visual UI of your website.

The browser can better determine whether something should go in the Accessibility Tree if it can understand what the node is for - which is where semantics come in.

Browsers will happily ignore `div`s and `span`s because they semantically mean nothing - they're for visual layout and the Accessibility Tree cares not for visual layout!

Of course you could always pepper your `div`s with `role="button"` or whatever but that goes against [WAI-ARIA recommendations](https://www.w3.org/TR/wai-aria-1.2/).

> It is not appropriate to create objects with style and script when the host language provides a semantic element for that type of object. While WAI-ARIA can improve the accessibility of these objects, accessibility is best provided by allowing the user agent to handle the object natively. For example, it's better to use an `h1` element in HTML than to use the `heading` role on a `div` element.

## SEO

Semantic HTML is not only for developers and screen readers - it also helps search engines crawl your content.

Don't take my word for it - [Yoast recommends using semantic markup to improve ranking](https://developer.yoast.com/blog/why-your-websites-code-structure-matters/).

We can improve on this even further by layering in [Schema data](http://schema.org/).

```jsx
<article itemscope itemtype="http://schema.org/Article">
  <header>
    <figure>
      <img src={post.image.src} alt={post.image.alt} itemprop="image" />
    </figure>
    <h1 itemprop="headline">{post.title}</h1>
  </header>
  <div itemprop="articleBody">
    {post.excerpt}
  </div>
  <footer>
    <ul>
      {post.categories.map(category => <li itemprop="articleSection">{category}</li>)}
    </ul>
  </footer>
</article>
```

Using semantic HTML and Schema data to define your structure means it’s quicker and more accurate for search bots to index your content because they don’t have to make assumptions about what something is.

## Violent Psychopaths

Another benefit is that it becomes clearer for the next developer (even if that is you in the future) who will maintain this code. 


<aside>
  It is a known fact that any code you wrote six months ago might as well have been written by someone else. 😉
</aside>

Using semantic HTML also goes towards your separation of concerns, keeping the “structure” and the “design” separate. Ensuring the markup describes the structure, leaving the css to describe the appearance will make things easier to adjust and maintain going forward.

> Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.
>
> <cite>[John F Woods, 1991](https://groups.google.com/g/comp.lang.c++/c/rYCO5yn4lXw/m/oITtSkZOtoUJ)</cite>
