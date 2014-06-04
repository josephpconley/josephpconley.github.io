---
layout: post
type: post
tags: knockoutjs mongodb opendata playframework point.io scala
title: (Triz)Swagging out at the Philly Codefest - Lessons Learned
published: true
description: This past weekend I teamed up with some buddies from Point.io to participate in my first hackathon, Philly Codefest.
---

This past weekend I teamed up with some buddies from [Point.io](http://point.io) ([Angel](https://twitter.com/twrivera), [Jon](https://twitter.com/jxshin75), and [Dylan](https://twitter.com/dyang_pointio)) to participate in my first hackathon, [Philly Codefest](http://phillycodefest.com/).  We spent the weekend bringing Angel's dream to life: a platform called TrizSwagger to analyze and track the use of "swag" (i.e. T-shirts, office supplies, and other marketing mathoms).  We leveraged social media and geolocation to give companies real-time visibility to their marketing campaigns.  Feel free to check out the app [here](http://www.trizswagger.com/).

<table class="image">
	<caption align="bottom">Angel demoing Point.io's apiDoc service</caption>
	<tr><td><img src="/assets/angel.jpg" alt="Angel promoting Point.io"/></td></tr>
</table>

&#x20;<br>

## Lessons Learned
Good programming is always concerned with simplicity and efficiency, whether it's using efficient data structures and algorithms, conciseness in your codebase, or even naming variables properly.  Building an app in 24 hours, however, throws the need for simplicity and efficiency into sharp relief.  Here are a few takeways from my experience.

### Coast-to-Coast JSON
I've always been a big fan of [Domain-driven Design](http://en.wikipedia.org/wiki/Domain-driven_design).  Writing POJOs in Java and case classes in Scala can provide a clear crystallization of the main actors of your application.  However, models may not always be necessary, especially if your app is backed by a service/database which gives you JSON (TrizSwagger is backed in [MongoDB](http://www.mongodb.com/) and served by [Flask](http://flask.pocoo.org/)).  The extra layer of complexity in marshalling/unmarshalling between JSON and your model can hinder performance and readability of your code, especially if you're using heavy ORM frameworks like Hibernate.  During a hackathon, if you're rapidly making changes to the model you'll surely get slowed down.  For a more thorough treatment of JSON Coast-to-Coast, check out [the Mandubian Blog](http://mandubian.com/2013/01/13/JSON-Coast-to-Coast/)

### Knockout.js Mapping plugin
In order to implement coast-to-coast design effectively, it's important to have a front-end framework that manages JSON well.  One such framework I'm fond of is Knockout.js, more specifically their [mapping plugin](http://knockoutjs.com/documentation/plugins-mapping.html).  This plugin automatically maps a JSON message into a Javascript observable object.  You can then code the front-end directly against object properties without having to pre-define a viewmodel.  You can also customize how objects are mapped by either modifying or enhancing the created object.  This strategy proved quite helpful during the hackathon as any changes to our back-end API literally only had to be changed in one place (the front-end).

One caveat is the creation of a new object using this plugin.  Since the plugin requires a JSON object to build out the observable, I wrote a basic method in Play to take an expected JSON object and "empty" it, setting default values that would be used in the new object form.

{% gist 9207995 %}

### Understanding your tools
TrizSwagger integrates with both Twitter and Facebook.  Understanding and setting up those integrations, however, occupied a lot of our time.  We also ran into issues with a server on OpenShift, slowing us down further.  Ultimately I think simpler is better, and every choice in technology needs to be well thought-out and well-suited to its use case.

## Conclusion
Overall it was an awesome experience.  Even though we didn't win (or place, or show for that matter), we learned a lot and we still took the time to mentor other teams who were using the [Point.io API](http://point.io/pointio-platform).  Great job Team TrizSwagger!

<table class="image">
	<caption align="bottom">Jon, Dylan, and Joe doing some last-minute coding</caption>
	<tr><td><img src="/assets/triz.jpg" alt="Jon, Dylan, and Joe doing some last-minute coding"/></td></tr>
</table>