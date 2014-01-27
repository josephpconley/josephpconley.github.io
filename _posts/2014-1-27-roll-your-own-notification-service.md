---
layout: post
type: post
tags: akka playframework rss sbt scala scrape
title: Roll Your Own Notification Service
published: true
---

Have you ever wished you could receive customized updates whenever your favorite websites update their content?
Most sites offer the means to get notified when a new blog post hits the wire or new products are added to their catalog (RSS, social media, e-mail, etc.).  But what if the site doesn't use any of these services?  Or what if you only want specific updates (i.e. blog posts from author X, new products containing the name Y)? Then you're left with only one course of action: build your own notification service!

Armed with the mighty powers of HTML scraping, the Scala programming language,
and a recurring scheduling mechanism (in this case Play's Akka scheduler), you have all the tools you need to setup your custom notification.

## My New EBook Notification Service
Let's create a notification service which let's us know when new ebooks are available at my local digital library,
[Delaware County Library System](http://digitallibrary.delcolibraries.org/).  At the time of this writing, no such notification service exists.  As I'd prefer not to miss any notifications, I'd like to setup an RSS feed.  Specifically, we'll write a process which periodically checks the digital library site for new ebooks and updates an RSS feed accordingly.

### Scala/SBT
We'll start out by creating a basic Scala application using SBT (you can checkout a skeleton project [here](https://github.com/josephpconley/scala/tree/master/hello-world-sbt)).  Let's add the [HTMLUnit](http://htmlunit.sourceforge.net/) and [Scala IO](http://jesseeichar.github.io/scala-io-doc/0.2.0/index.html#!/overview) libraries to our project.  We'll use HTMLUnit to parse the HTML code of the library's website, and we'll use Scala IO to write our XML to file.  Your build file should now look like this (assuming you named your project "ebook"):

{% gist 8584992 %}

### Scala XML
Let's start by building an abstraction for an RSS feed (you can read about the basics of RSS [here](http://www.w3schools.com/rss/rss_reference.asp)).  We'll start with an Item case class which holds the basic properties of an RSS item and a method to generate xml.  Similarly, we define the basic properties of a Feed using a trait.  We'll make this abstract in the anticipation of re-using this abstraction for other feeds.

{% gist 8590722 %}

### Screen Scraping with HTMLUnit
Let's build a NewEBookFeed which implements Feed.  When we implement the items method, we'll use HTMLUnit to parse the HTML code from [Delaware County Library System](http://digitallibrary.delcolibraries.org/) to find out the newest items.  This requires digging around the source HTML a bit to understand the structure and find useful patterns.  Basic knowledge of [XPath](http://www.w3schools.com/xpath/) is required to leverage those patterns.  After inspecting the source code and following the appropriate links, we can view the New Ebook page source and parse out the new titles, authors, and image URLs.  

{% gist 8590984 %}

That's it!  You can find my complete code as part of my [scrape library](https://github.com/josephpconley/scala/tree/master/scrape), specifically the com.josephpconley.books and com.josephpconley.rss packages.  We can test the code by running the following:

{% gist 8591058 %}

## Deploy using Play
Now that we have a way to generate an up-to-date RSS feed, we need a way to update our feed periodically and make it publically available to an RSS Reader like [feedly](http://feedly.com) (my personal favorite).  We could handle this a few different ways (i.e. schedule a CRON job to push a file to our Dropbox folder), however I'd like to demonstrate how to handle both the scheduling and file writing/serving using the [Play Framework](http://www.playframework.com/).

Start a new Play Scala project, and either package our ebook project as a jar and copy to the lib folder, or just copy and paste the source code into the new Play project (I've done the former).

### Akka Scheduler
To hook into Play's Akka scheduler, we create a Global object in the app folder and override the onStart method, which allows us to run code once the application starts.  The Akka system scheduler allows you to schedule a recurring process for a given Duration.  In our case, since the site doesn't update that frequently and we want to be respectful by not overloading the site with requests, we'll set the duration to 12 hours.

{% gist 8605053 %}

From there, it's simply a matter of building out a controller with some routes to host the updated file (a straightforward exercise I'd leave to the reader).  I personally included this code and hosted the RSS feeds in [my own Play app](http://app.josephpconley.com/rss) running on Heroku.

## Drawbacks
One drawback you might have noticed from this specific example is the possibility of the target site's source code changing.  We relied on very specific HTML tags, text and class attributes to query the information we needed, and should the site be re-written significantly, it's possible that we would have to re-write our scraping code to accommodate.

## Conclusion
Managing the daily flow of information can be a challenge.  With a little bit of coding, however, we can gain finer control over the information we consume, helping us be more productive in our everyday life.