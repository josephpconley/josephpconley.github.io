---
layout: post
type: post
tags: api datacombinator philosophy
title: Apps are Dead
subtitle: Well not really, but they should be
published: true
---

No, apps aren't dead (yet).  But they should be.  More precisely, I believe the concept of managing the bits and bytes of one's digital life into [95 different silos](http://thenextweb.com/apps/2014/08/26/android-users-average-95-apps-installed-phones-according-yahoo-aviate-data/) has become untenable.  Simple activities like communicating with friends should "exist" in one place.  All of my documents should "live" in one place (my current company [is working on solutions](http://point.io/) for that).  I don't mean to say that only one social network or one document storage site should prevail, but that similar services should be aggregated into one virtual, uniform experience for the end user.

What's the alternative to a fractured digital experience?  I can't say for sure, but I'll bet [APIs](http://www.restapitutorial.com/) will be involved.  APIs allow the composition of functionality from multiple services while still mainitaining fine-grained access/control/security over the individual interactions.  Viewing today's popular applications as a menu of functions (i.e. API endpoints), it becomes natural to want to stitch these functions together in interesting ways.  One such example of an API-driven, aggregator platform is [Hootsuite](https://hootsuite.com).  Their service allows reading activity streams from multiple social media sites, posting to multiple sites, and other common functionality.  While this platform isn't perfect (e.g. I can't interleave multiple streams into one stream), it's certainly a good start.

APIs have been around for a while now, so why aren't API-driven aggregator platforms more popular?  App companies themselves are likely to blame.  LinkedIn recently [disabled API access to a Philadelphia-based startup](http://www.bizjournals.com/philadelphia/news/2014/06/17/peoplelinx-gets-linkedout-reworks-product.html?page=all), perhaps seeing them as a threat (the startup [has since pivoted without losing customers](http://upstart.bizjournals.com/resources/executive-forum/2014/06/30/peoplelinx-founder-nathan-egan-linkedin-api.html?page=all)).  Netflix [shut down its public API last month](http://www.theverge.com/2014/6/13/5808424/netflix-will-close-its-public-api-to-some-developers-in-november) for most developers.  Facebook and Twitter have also had several high-profile denials of third-party applications as well.

Are app companies justified in their selectiveness over API access?  In most cases, yes.  Their data and functionality are typically their core competency, so why give it away for free/cheap?  Their incentives, then, need to be realigned.  There needs to be a platform which gives these companies an incentive to offer greater or even unfettered access.  Then technology companies can focus on being service providers (via API and other channels), and not necessarily worry about being application providers.

I'm not sure what that platform is or what it looks like, but I'm trying to build it.  Yes I know, it'll probably end up being just another app (I thought those things were dying?), but building apps is what I know, so bear with me.  Stay tuned for more details.