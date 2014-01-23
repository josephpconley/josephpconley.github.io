---
layout: post
type: post
tags: playframework rss scala scrape
title: Roll Your Own Notification Service
published: true
---

Have you ever wished you could receive custom updates whenever your favorite websites update their content?
Most sites offer simple ways to get notified when a new blog post is uploaded or new products are added to their catalog (RSS, social media, e-mail, etc.).
But what if the site doesn't use any of these services?
Or what if you only want to be notified only for specific updates (i.e. blog posts from author X, new products containing the name Y)?
Then you're left with only one course of action: build your own notification service!

Armed with the mighty powers of HTML screen scraping, the programming language Scala,
and a recurring scheduling mechanism (in this case Play's Akka scheduler), you have all the tools you need to setup your custom notification.

## My Service - New EBook Notification
Let's look at creating a notification service to tell us when new ebooks are available at my local digital library,
[Delaware County Library System](http://digitallibrary.delcolibraries.org/) (at the time of this writing no notification service exists).
As I'd prefer not to miss any notifications, we'll write a process which checks this site for new ebooks and updates an RSS file when new ebooks are added.

### Play/Scala
If you haven't already, create a simple Play Scala project from scratch.  We're using Play to handle the scheduling of the update process and
serve a basic HTML page and the RSS file.

### HtmlUnit
Include a dependency for [HTMLUnit](http://htmlunit.sourceforge.net/) in your play project like so

{% gist 8584992 %}