---
title: WordPress forgotten password localhost hack
layout: 'layouts/article.html'
tags: article
description: Forgotten the password to your local CMS? Can't email a password reset? Here's my tried-and-tested solution.
date: 2021-06-10
hero:
  size: full-bleed half-screen
  caption: true
  title: WordPress forgotten password localhost hack
  image:
    src: /images/clint-patterson-dYEuFB8KQJk-unsplash.jpg
    alt: A leet hacker bypasses security. Probably.
    credit:
      name: Clint Patterson
      url: https://unsplash.com/@cbpsc1
---

I have lost count of the number of times I've forgotten the password to the local or development CMS.

My natural instinct is to click the _Forgot Password_ link but, obviously, there's no way to trigger that email from the local system.

I've spent too long hunting through articles on how to recover the forgotten password. The quickest and easiest solution that I've found is to change the password manually in the database.

## How do we do that then?

WordPress stores passwords in the `wp_users` table. The prefix may be different if you have elected to change that in the `wp-config.php` file. It's good practice to do that for security.

When you look at the table, it'll look a little like this&hellip;

| ID | user_login                   | user_pass                          |
|----|------------------------------|------------------------------------|
| 1  | {{context.me.name.username}} | $P$BHpcLw/aWsTPmeDprzXwOEl45bJm9A3 |

WordPress stores your password as an [MD5 hashed string](https://en.wikipedia.org/wiki/MD5). This prevents anyone with access to the database seeing confidential information in plain text.

WordPress salts the password using [PHPass](https://www.openwall.com/phpass/) (as you can see from the `$P$` at the start of the example password). This hack will still work though as, even if your password has been salted, [you can still replace the password with an MD5 hash, and WordPress will let you log in](https://wordpress.org/support/article/resetting-your-password/).

If this _wasn't_ obfuscated like this, we'd be able to copy our password and paste it into the login form&hellip;but we can't - and for good reason!

So, to fix our little problem, we need to replace the existing hashed password with a new hashed password - we can't overwrite the MD5 hash with plain text because that won't work.

I have [Hasher](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-hasher) installed as a plugin in VS Code. If you don't use VS Code or don't want to use this extension, [MD5 Hash Generator Online](https://www.md5hashgenerator.com/) works pretty well.

I would recommend that you don't create your "forever password" using these hash generators though. Overwrite the existing password with something easy to remember and **very, very temporary** - a favourite of mine is `Pa55word!` &mdash;

```bash
267057150e34eca5c6af39ec9b30864e
```

Once the password has been changed, you can log in with your new password **and immediately change it to something more secure**.

I hope this helps you as much as it has helped me. 😎
