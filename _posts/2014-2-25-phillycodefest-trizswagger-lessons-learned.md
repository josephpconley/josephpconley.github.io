---
layout: post
type: post
tags: knockoutjs mongodb playframework pointio scala
title: (Triz)Swagging out at the Philly Codefest - Lessons Learned
published: true
---

![Angel](https://pbs.twimg.com/media/BhF9CrRIcAASzov.jpg)

![TrizSwagger](https://pbs.twimg.com/media/BhL7wYeIAAAKUpz.jpg)

&#x20;<br>

This past weekend I teamed up with some buddies from [Point.io](http://point.io) to participate in my first hackathon, [Philly Codefest](http://phillycodefest.com/) at Drexel University.  We spent the weekend bringing our team leader [Angel's](https://twitter.com/twrivera) dream to life: a platform called TrizSwagger to analyze and track the use of "swag" (i.e. T-shirts, office supplies, and other marketing mathoms).  We leveraged social media and geolocation to give companies real-time visibility to their marketing campaigns.  Feel free to check it out [here](http://www.trizswagger.com/) (no, we didn't win, place, or show).

## Lessons Learned
Good programming is always concerned with efficiency, whether it's using efficient data structures & algorithms, conciseness in your codebase, or even something else.  Building an app in roughly 24 hours, however, throws the need for efficiency into sharp relief.  Here are a few tips I've gleaned to keep the focus on efficiency.

### Coast-to-Coast JSON
I've always been a big fan of [Domain-driven Design](http://en.wikipedia.org/wiki/Domain-driven_design).  From writing POJOs in Java to case classes in Scala, models can provide a clear crystallization of the main actors of your application.  However, they may not always be necessary, especially if your app is backed by a service/database which gives you JSON (TrizSwagger is backed partly in [MongoDB](http://www.mongodb.com/)).  With a modern front-end framework, you should be able to consume the JSON directly and handle any customizations there.

### Knockout.js Mapping plugin
In order to implement coast-to-coast design effectively, it's important to have a front-end framework that manages JSON well.  One such framework I'm fond of is Knockout.js, more specifically their [mapping plugin](http://knockoutjs.com/documentation/plugins-mapping.html).  This plugin automatically maps a JSON message into a Javascript observable object.  You can then code the front-end directly against object properties you expect to get.  You can also customize how objects are mapped by either modifying or enhancing the created object.  This strategy proved quite helpful during the hackathon as any changes to our back-end API literally only had to be changed in one place.

One caveat is the creation of a new object using this plugin.  Since the plugin requires a JSON object to build out the observable, I wrote a basic method in Play to take an expected JSON object and "empty" it, setting default values that would be used in the new object form.

### MongoDB is really great
Easy to spin up
ReactiveMongo

## Conclusion
It was an awesome experience.  Great job Team TrizSwagger!