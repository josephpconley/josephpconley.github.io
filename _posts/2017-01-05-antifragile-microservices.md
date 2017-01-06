---
layout: post
type: post
tags: [lagom, taleb, chariot, microservices]
title: Microservices and the Evolution of Software Architecture
subtitle: Using microservices to build antifragile systems
published: true
---

As makers of enterprise software, we've come a long way. We've emerged from the shadows of command-line tools and Swing-based apps to build great and terrible web-based platforms, monolithic systems that inspire fear and awe in user and maintainer alike. Yet for all our cunning, we're still imprisoned by our great works. Their slow builds, massive merge conflicts, and ever-increasing complexity slow the evolution of software (and, perhaps more importantly, developer).  Yet this unrest gave birth to the idea of [microservices](http://martinfowler.com/articles/microservices.html), an idea which can help development teams move faster to create more robust and scalable software.

## What are Microservices?

A now-ubiquitous term, microservices takes that age-old programming tenet of ["do one thing, and do it well"](https://en.wikipedia.org/wiki/Unix_philosophy#Do_One_Thing_and_Do_It_Well) and applies it in a larger context to the application architecture as a whole.  We're no longer talking about encapsulating business logic in [small methods or classes](https://en.wikipedia.org/wiki/Single_responsibility_principle), but constraining the interactions of an entire context into an isolated, deployable, scalable unit. An application no longer lives solely in the confines of a WAR file on a Tomcat server, but exists as the composition of several services working in concert. The term "application" now seems quaint in contrast to the interactive platforms we can devise with microservices.

This approach allows a team to build a service in isolation, choosing the appropriate language and datastore for that service's needs.  This also allows the teams themselves to be more specialized.  Instead of having several full-stack developers who are pretty good at every aspect of the monolith, you can have entire teams to dedicated to just UI, server-side, or database development.  This allows for higher quality of software, and a faster rate of evolution.

<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/884_RC03/embed_loader.js"></script>
<script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"microservices","geo":"","time":"2012-01-01 2016-12-01"}],"category":0,"property":""}, {"exploreQuery":"date=2012-01-01%202016-12-01&q=microservices"}); </script> 
<small>Popularity of the term "microservices" - <a href="https://www.google.com/trends/explore?date=2012-01-01%202016-12-01&q=microservices" target="_blank">Google Trends</a></small>

Some recent trends have contributed to the popularity of microservices architectures. The rise of functional programming, with its focus on functions as first-class citizens and immutable state, encouraged developers to write smaller, simpler methods that compose rather than long, unwieldy algorithms. Reactive programming further refined inter-service communication with asynchronous message-passing, back-pressure, and resilience. Containerization provided another boost, literally encapsulating entire processes in portable, runnable environments. These ideas all lay the foundation for a microservices way of thinking.

## The End Goal of Microservices

So what great benefit, then, did we achieve from the microservices movement, other than some fancy new language to add to our resumes? David Dawson captured the idea best when he [described the end goal of microservices as achieving Antifragility](http://www.simplicityitself.io/microservices/2016/07/20/microservices-philosophy.html). This term was popularized by the stoic trader-turned-philosopher Nassim Nicholas Taleb in [_Antifragile: Things That Gain from Disorder_](https://www.goodreads.com/book/show/13530973-antifragile?from_search=true ). Taleb uses examples from all walks of life (financial options, political organization, physical training) to enumerate the tuple of <Fragile, Robust, Antifragile> that can be used to describe systems. A system under stress can either degrade (fragile), maintain normal operations (robust), or improve (antifragile). Antifragility, then, is the true aim for microservices, a system that can not just handle failure gracefully (robust) but also scale elastically to meet demand (antifragile). An ambitious goal, but one within reach given our current technology.

Will this journey from the familiarity of the monolith to the unknown of the microservices be easy?  Probably not.  There are always tradeoffs when making such choices about technology. Developers will face increased complexity in running and testing multiple services. Architects will struggle to define appropriate boundaries for services. Operations folks will now have _n_ builds to maintain and monitor instead of one. Change won't come easy, and microservices may not be the best solution for every use case, but for most enterprise-level systems I think the microservices approach can lead to producing better software.

## How Can I Build Microservices?

One such framework that is trying to make the implementation of microservices easier is [Lagom](http://www.lagomframework.com/). Lagom is a very opinionated framework.  Given the pitfalls of microservices development, I think that's a good thing.  It's designed from the bottom-up with microservices in mind, providing capabilities for service interaction, distributed persistence, and ease of development and deployment. You can read more about [their philosophy](http://www.lagomframework.com/documentation/1.2.x/java/WhatIsLagom.html) and review a [sample application](https://github.com/lagom/activator-lagom-java-chirper) to understand their motivation. In my next post, I'd like to use Lagom to answer one simple question: how do we build antifragile systems using microservices?