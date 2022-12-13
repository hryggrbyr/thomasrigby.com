---
title: "Micro-interactions to delight and annoy"
date: "2016-01-28T13:00:15"
permalink: "articles/micro-interactions-to-delight-and-annoy/index.html"
tags: "article"
description: "<p>Can your UI harm your UX? Let&#8217;s find out&#8230;</p>
"
layout: "layouts/article.html"
hero:
  size: "full-bleed half-screen"
  caption: "true"
  title: "Micro-interactions to delight and annoy"
  image:
    src: "/images/scrummable_interactions-hero.jpg"
    alt: "Micro-interactions to delight and annoy"
---
<div class='intro'><p>The be-all-and-end-all of user interactions, way back in the day, were hover states. Position your cursor over an element and it&#8217;ll change in someway to indicate that it does something.</div>
<p>Un-styled links in all browsers still have the same four states:</p>
<ul>
<li>normal (blue)</li>
<li>hovered (cursor becomes a little hand)</li>
<li>active (red)</li>
<li>visited (purple)</li>
</ul>
<p>These states exist to give the user a visual indication that their actions are having an effect. Through CSS and JavaScript, we can manipulate these styles and make a variety of fancy interactions; from different colours to animations.</p>
<p>From these humble beginnings, interactions grew into the all-singing/all-dancing world of the modern user interface. Micro-interactions followed on from this &#8211; those unobtrusive little helpers dotted around applications that make life easier and make using an interface intuitive and seamless.</p>
<p>For example, Gmail gives you a warning if you say attached in an email but don&#8217;t actually attach something, spell-checkers underline misspelled words for you, images on websites zoom/change colour/blur/rotate/turn into videos on hover to indicate that they do something, the Slack app only sends push notifications when the desktop app is closed or you&#8217;re idle, the list goes on…</p>
<h2>The Good Side</h2>
<p>Obviously, there are micro-interactions that are helpful: Instant form-field validation &#8211; reminding you that email addresses have an @ in them when you move out of the email field, for example. WordPress has recently introduced saving a post when pressing CTRL-S (CMD-S on a Mac). These, largely unobtrusive, micro-interactions make for a nicer, more fluid, experience.</p>
<h3>Helpers and Delighters</h3>
<p>Interactions can be broken down into two broad groups: Helpers and Delighters. Helpers anticipate user behaviour and make suggestions. We mostly don&#8217;t even notice them (except when they go wrong!). These would include:</p>
<ul>
<li>Suggested search terms</li>
<li>automatic form completion</li>
<li>swipe to dismiss/archive/delete</li>
<li>converting emoticons into emojis (and yes, they&#8217;re different!)</li>
<li>&#8220;user_name is typing&#8221; in instant messaging clients</li>
</ul>
<p>Delighters are distinctly non-functional micro-interactions that make the user experience nicer. Usually taking the form of animations, in-jokes, or little humanising touches. Some examples are:</p>
<ul>
<li>un-read notifications indicator on the icon (similarly number of items in a checkout basket)</li>
<li>BBC iPlayer&#8217;s volume <a href="https://youtu.be/KOO5S4vxi0o">goes up to 11</a></li>
<li>Outlook&#8217;s &#8220;You&#8217;ve reached Inbox Zero!&#8221; message on emptying your inbox</li>
<li>Videostream&#8217;s friendly, nerdy, and amusing loading messages</li>
</ul>
<p>Some have become so prevalent that I now notice when they&#8217;re not included &#8211; like pull-to-refresh in a lot of mobile apps.</p>
<h3>The lie that is loading indicators</h3>
<p>Whether it&#8217;s spinning wheels, morphing blobs, or the more traditional horizontal bar filling up, we&#8217;ve all seen loading indicators but how many of us are aware that they&#8217;re a huge lie?</p>
<p>An extension of the <a href="https://en.wikipedia.org/wiki/Gantt_chart">Gannt chart</a>, they were adopted by the digital world following a <a href="https://en.wikipedia.org/wiki/Brad_Myers">paper published by Brad Myers</a> in the mid-eighties that concluded users felt decreased anxiety given an indication that something was happening in the background. File transfer rates over a network (especially the internet or wi-fi) are too unreliable to accurately calculate remaining time so, rather than bother, most contemporary progress bars or loading indicators are simply an arbitrary indicator that the software hasn&#8217;t frozen rather than an indication of actual activity &#8211; called &#8216;throbbers&#8217; in the industry.</p>
<p>It&#8217;s a lie but, given it reduces user disengagement, I think it&#8217;s a good lie.</p>
<p><img src="/images/scrummable_spinnnnnn.gif" style="aspect-ratio: 214/206" /></p>
<p><cite>Chris Coyier</cite></p>
<h2>The Dark Side</h2>
<p>What is the dark-side of micro-interaction? Ranging from the irritating to the detrimental, there are occasions where this nanny-state of development isn&#8217;t necessarily the best thing for users. With the prevalence of netspeak/textspeak (OMG, WTF, non moar bad spel than this!), spell-checkers start to highlight everything! Admittedly, this is being negated by applications adding frequently used phrases to custom dictionaries, but it can be irritating when an app tells me that I&#8217;ve spelled my girlfriend&#8217;s name wrong!</p>
<p>Highlighting a product name on ao.com presents a pop-up advertising their Price-Match scheme. I imagine there are some people that would be impressed or helped by this but it bugs me!</p>
<p><img src="/images/scrummable_ao-price_match.png" style="aspect-ratio: 862/379" /></p>
<p>Highlighting text on Metro Lyrics brings up the option to post on Facebook, Twitter, or Google+. However, they&#8217;ve chopped off half the quote and replaced it with a link to their own site. This isn&#8217;t helpful to me at all!</p>
<p><img src="/images/scrummable_metro_lyrics-social_media.png" style="aspect-ratio: 673/341" /></p>
<p><img src="/images/scrummable_metro_lyrics-twitter_post.png" style="aspect-ratio: 516/171" /></p>
<h3>Helpful IOS</h3>
<p>The IOS mail client automatically turns dates, any number, and addresses into links that hook into the calendar, dialler, and maps applications respectively. This is all well and good but can be annoying when copyright dates and company HQ addresses in promotional emails are turned into links making them more prominent than they should be or when the blue font is rendered unreadable against the background colour. More annoyingly, when an account number is turned into a click-to-call phone number to nowhere! This is such an issue that <code>&lt;meta content="telephone=no" name="format-detection"&gt;</code> exists to counter it.</p>
<h3>Hijacking UI</h3>
<p>Hijacking well-established actions in a user interface is another way to annoy people! Changing the scroll direction, or redirecting the &#8216;Back&#8217; button to an advert, and displaying a &#8220;Sign up to our newsletter&#8221; pop-up half-way through an article (or when your cursor heads towards the address bar/back button) are all ways to get people&#8217;s backs up.</p>
<h2>The Future</h2>
<p>So, how do I see the future of micro-interaction? Despite the flaws, some of which I&#8217;ve pointed out here, they are definitely here to stay. But how can they develop? I see a lot of effort going in to make them more accurate. Google is already ahead of the curve on this one &#8211; the bordering-on-the-creepy-ness of Google Now is a good example: scanning emails and calendars, offering travel tips based on your commute to work and the time of day, and generally automatically organising your life so you don&#8217;t have to bother.</p>
<p>Factoring in wearable tech and the Internet of Things, I envisage watches telling you to go to the door just as the postman arrives, automated replies to invitations when you&#8217;re double-booked, cars that drive you home from work without prompting, houses that automate lights/heating/music/run a bath based on who has just walked in, where they&#8217;ve come from and what they&#8217;re most likely to want.</p>
<p>Tech knows you&#8217;ve just got home from work, your calendar has been back-to-back meetings all day, it&#8217;s raining outside, and your train was half-an-hour late! So, when you walk through your front door, the heating is on, a bath is run, soothing music is playing, and the kettle&#8217;s just boiled.</p>
<p>We&#8217;re becoming steadily more connected with technology, technology is learning more and more about us and our habits and routines, and this will inevitably lead to helpful interactions getting better at judging what we&#8217;re most likely to do in a given situation. And, along side that, those tiny little personal touches will continue to delight us.</p>
<h2>Conclusion</h2>
<p>The purpose of a micro-interaction is to humanise the interface, provide instant feedback, to keep the user &#8216;in the loop&#8217; so they feel engaged. There are occasions where applications can be too &#8220;helpful&#8221;. For every user that is helped, there will be someone annoyed by the exact same thing. I know what I&#8217;m doing, I don&#8217;t need a nanny-state suggesting I&#8217;m doing things incorrectly all <span style="border-bottom: 1px dashed #ff0000;">teh</span> <span style="border-bottom: 1px dashed #ff0000;">timez</span>.</p>
<p><cite> <strong>This post was originally posted on <a href="http://www.shoot-the-moon.co.uk/blog/micro-interactions-to-delight-and-annoy/">shoot-the-moon.co.uk</a></strong> </cite></p>
