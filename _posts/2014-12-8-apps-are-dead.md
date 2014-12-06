---
layout: post
type: post
tags: api datacombinator philosophy
title: Apps are Dead
subtitle: Well not really, but they should be
published: false
---

No, apps aren't dead (yet).  But they should be.  More precisely, I believe the concept of managing the bits and bytes of one's digital life into [95 different silos](http://thenextweb.com/apps/2014/08/26/android-users-average-95-apps-installed-phones-according-yahoo-aviate-data/) has become untenable.  Simple activities like communicating with friends should "exist" in one place.  All of my documents should "live" in one place (my current company [is working on solutions](http://point.io/) for that).  I don't mean to say that only one communications protocol or one data storage site should prevail, but that similar services should be aggregated into one virtual, uniform experience.

What's the answer, then, to this multiplicity of silos?  I can't say for sure, but I suspect APIs will be at the crux of the solution.  APIs allow for composing functionality from multiple services while still mainitaining fine-grained access/control/security over the individual authorizations.  Viewing today's popular applications as a menu of functions (i.e. API endpoints), it becomes natural to want to compose these functions to build unified platforms.  One such example of an API-driven platform is [Hootsuite](https://hootsuite.com).  Their service allows reading activity streams from multiple social media sites, posting to multiple sites, and other common functionality.  While this platform isn't perfect (e.g. I can't interleave multiple streams into one stream), it's certainly a good start.

APIs have been around for a while now, so why aren't API-driven aggregator platforms more popular?  App companies themselves are usually to blame.  LinkedIn recently [disabled API access to a Philadelphia-based startup](http://www.bizjournals.com/philadelphia/news/2014/06/17/peoplelinx-gets-linkedout-reworks-product.html?page=all), perhaps seeing them as a threat (they've [pivoted and emerged stronger](http://upstart.bizjournals.com/resources/executive-forum/2014/06/30/peoplelinx-founder-nathan-egan-linkedin-api.html?page=all)).  Netflix [shut down its public API last month](http://www.theverge.com/2014/6/13/5808424/netflix-will-close-its-public-api-to-some-developers-in-november) for most developers.  Facebook and Twitter have had several high-profile blocks of third-party applications as well.

Are app companies justified in their selectiveness over API access?  Absolutely.  Their data and services are usually their bread-and-butter, so why give it away for free/cheap?  To me, this is the heart of the issue.  There needs to be a platform which gives these companies an incentive to offer unfettered access.

I'm not sure what that platform is, but I'm trying to build it.  Yes I know, it'll end up being another app (I thought those things were dying?), but it's all I know, so bear with me.  Updates soon to follow.