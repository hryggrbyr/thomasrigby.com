---
title: Using slots in React
layout: 'layouts/article.html'
tags: article
description: Having multiple almost identical components is just very bad and wrong - let's fix it properly!
date: 2021-02-02
hero:
  size: full-bleed half-screen
  caption: true
  title: Using slots in React
  image:
    src: /images/slot_machine.jpg
    alt: Slot machines
---

Consider the humble Modal…

We have a button that opens the modal, and some content to be displayed within. 

The traditional way, using React's `children` property, would look something like this…

``` jsx
const { triggerClasses, triggerText, children } = props

<Modal>
  <button className={triggerClasses} onClick={openModal}>{triggerText}</button>
  <article>
    <button onClick={closeModal}>Close</button>
    {children}
  </article>
</Modal>

// Footer.jsx
<Modal
  triggerText="References"
  triggerClasses="button"
>
  <ReferencesList/>
</Modal>
```

Here we have a `Modal` component that expects a list of classes and some button text. Anything within the opening and closing tags is considered `children` and rendered inside the `article` element.

This is all very good. Pat yourself on the back, move the ticket to done - well done! 😎

## Some time later…

Some time later, a new ticket surfaces. Now, _in addition_ to the existing Modal, we also need a component that lets the user open a larger image in a modal.

One option is to create an `ImageModal` component…

``` jsx
// Image-Modal.jsx
const { triggerClasses, triggerImage, triggerImageAltText, children } = props

<Modal>
  <img 
    className={triggerClasses}
    src={triggerImage}
    alt={triggerImageAltText}
    onClick={openModal}
  />
  <article>
    <button onClick={closeModal}>Close</button>
    {children}
  </article>
</Modal>

// Carousel.jsx
<Modal
  triggerClasses="thumbnail"
  triggerImage="http://placekitten.com/300/300"
  triggerImageAltText="A kitten"
>
  <img class="full-size" src="http://placekitten.com/1920/1080" alt="A kitten" />
</Modal>
```

But now we have two _almost_ identical components - the only real difference here is the "trigger" element - one is a button, one is an image.

Sidenote: Look at that `onClick` handler on the `img` element. Does it look wrong to you? It should.

What do we do if we get a request for something else slightly different? Perhaps the trigger will need to be a button with an icon or a text link. Do we copy pasta `TextModal.jsx` or `ModalWithIcon.jsx`?

Having multiple _almost_ identical components is just very bad and wrong - let's fix it properly!

## Fixing it properly

The fancy thing with the `children` property is that there's nothing fancy about it at all - it's just a `prop` like all of the others. It just happens that we stuff that one with `<html/>` and the others with `String`s.

You can put `<html/>` into **any of the `props`**!

``` jsx
// New-Modal.jsx
const { trigger, content } = props

<Modal>
  <button onClick={openModal}>{trigger}</button>
  <article>
    <button onClick={closeModal}>Close</button>
    {content}
  </article>
</Modal>

// Footer.jsx
<Modal
  trigger={<span className="button">References</span>}
  content={<ReferencesList/>}
/>

// Carousel.jsx
<Modal
  trigger={<img clasName="thumbnail" src="http://placekitten.com/300/300" alt="A kitten" />}
  content={<img className="full-size" src="http://placekitten.com/1920/1080" alt="A kitten" />}
/>
```

Now, semantically all "trigger" elements are actually `button`s (with all of the benefits of using an actual button) but visually they can be almost anything you want!

We have one component that can handle different variants. It does one job and it does it pretty well!