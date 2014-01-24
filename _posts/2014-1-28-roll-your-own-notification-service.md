---
layout: post
type: post
tags: playframework rss scala scrape
title: Roll Your Own Notification Service
published: true
---

Have you ever wished you could receive custom updates whenever your favorite websites update their content?
Most sites offer simple ways to get notified when a new blog post is uploaded or new products are added to their catalog (RSS, social media, e-mail, etc.).
But what if the site doesn't use any of these services? Or what if you only want to be notified only for specific updates (i.e. blog posts from author X, new products containing the name Y)? Then you're left with only one course of action: build your own notification service!

Armed with the mighty powers of HTML screen scraping, the programming language Scala,
and a recurring scheduling mechanism (in this case Play's Akka scheduler), you have all the tools you need to setup your custom notification.

## My Service - New EBook Notification
Let's look at creating a notification service which let's me know when new ebooks are available at my local digital library,
[Delaware County Library System](http://digitallibrary.delcolibraries.org/).  At the time of this writing, no such notification service exists.  As I'd prefer not to miss any notifications, I'd like to take advantage of RSS.  Specifically, we'll write a process which periodically checks this site for new ebooks and generates an RSS file listing the newest ebooks.

### Scala/SBT
We'll start out by creating a basic Scala application and build the application using SBT.  Please see my [resources page]({{ site.url }}/resources.html) to see how to install Scala and SBT and get a basic project started.  Let's add the [HTMLUnit](http://htmlunit.sourceforge.net/) and [Scala IO](http://jesseeichar.github.io/scala-io-doc/0.2.0/index.html#!/overview) libraries to our project.  We'll use HTMLUnit to parse the contents of websites, and we'll use Scala IO to generate our XML file.  Your build file should now look like this (assuming you named your project "ebook"):

{% gist 8584992 %}

### Scala XML
Let's start by building an abstraction for an RSS feed.  We'll start with an Item case class which holds the basic properties of an RSS item and a method to generate xml.  Similarly, we define the basic properties of a Feed using a trait.  We'll make this abstract in the anticipation of re-using this abstraction for other feeds.

{% gist 8590722 %}

### Screen Scraping with HTMLUnit
Let's build a NewEBookFeed which implements Feed.  However, when we implement the items method, we'll monitor the webapge for new ebooks of [Delaware County Library System](http://digitallibrary.delcolibraries.org/).  After inspecting the source code of the site, it's clear that the new ebook URL is generated, so we'll need to use HTMLUnit and XPath to find the url and follow it.  After following the URL, we can view the New Ebook page source and parse out the new titles, authors, and image URLs.  Here's the full implementation:

{% gist 8590984 %}

We can test the code by running the following:

{% gist 8591058 %}

## Deploy using Play
Now that we have a way to generate an up-to-date RSS feed, we need a way to update our feed periodically and make it publically available to an RSS Reader like [feedly](feedly.com) (my personal favorite).  We could this a few different ways (i.e. schedule a CRON job to push a file to S3), however I'd like to demonstrate how to handle both the scheduling and file writing/serving using Play!.

Start a new Play Scala project, and either package our ebook project and include as a dependency, or just copy and paste the source code into the new Play project (I've done the former).  