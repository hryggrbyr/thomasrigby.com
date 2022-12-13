---
title: Your codez is overkill
layout: 'layouts/article.html'
tags: article
description: We all love writing code - that's why we're doing this - but sometimes we can seriously over-engineer things.
date: 2021-06-08
hero:
  size: full-bleed half-screen
  caption: true
  title: Your codez is overkill
  image:
    src: /images/1200px-Overkill_Party.San_Metal_Open_Air_2017_19.jpg
    alt: Thrash metal band Overkill performing live at Party.San Open Metal 2017
    credit:
      name: Wikipedia
      url: https://it.wikipedia.org/wiki/Overkill_(gruppo_musicale)
---

Once upon a time, I encountered a bug.

The implementation was for a "View PDF" button: when the user clicks the button, a PDF opens in a new browser tab.

## The problem

The code looked a bit like this&hellip;

```jsx
const downloadDocument = (document) =>
  new Promise((resolve, reject) => {
    return axios.get(
      `${ENDPOINT}/${document.id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: AUTH_TOKEN
        },
      }
    ).then(({
      status,
      statusText,
      data
    }) => {
      if (status !== 200) {
        throw new Error(statusText);
      }
      return jwt.decode(data);
    }).then((response) => {
      if (response.responseStatus !== 200) {
        throw new Error(
          response.errors ?
          response.errors[0].message :
          response.responseMessage
        );
      }
      resolve(response);
    }).catch((error) => {
      reject({
        status: 401,
        error: error.message,
      });
    });
  });

const webDownload = () => {
  downloadDocument(document)
    .then((response) => {
      if (!response || response.responseStatus !== 200)
        throw new Error(response);

      const {
        href
      } = response;

      if (!href) throw new Error("No file");

      window.location = href;
    })
    .catch(() => {
      appDispatch({
        type: "APP_ERROR",
        error: "Failed to access the file",
      });
    })
};

<button
  type="button"
  onClick={webDownload}
  className="button"
>
  <Icon name="file-download" />
</button>
```

## The solution

The actual solution I eventually used was to fix the `window.location = href` line. 

It worked but, later that day, I started thinking that the <q>correct</q> answer would be&hellip;

> Use a link!

If the criteria are: _I click a button and the PDF opens in a new tab_.

Then the only code needed is;

```html
<a 
  class="button"
  href="/path/to/file.pdf"
  title="View file.pdf"
  target="_blank"
  rel="nofollow noopener noreferrer"
>
  View pdf
</a>
```

## Conclusion

Sometimes codebases are quagmires of over-engineered code that blinker us to the best solution.

It was all too easy to dive into that convoluted code to find the bug - and it was tricky to figure out what was causing the issue because there was so much code to read.

There's nothing really wrong with the code as it is &mdash; it handles errors, authenticates requests, JWT encodes traffic, abstracts the download function so it can be used elsewhere; it's just overkill for _I click a button and the PDF opens in a new tab_.

> There are no bugs in the code you didn't write.

PS: Whatever you do, try to avoid this&hellip; 🤣

{% image '/images/your-codez-is-overkill-code.png', 'A JavaScript function that essentially does nothing' %}
