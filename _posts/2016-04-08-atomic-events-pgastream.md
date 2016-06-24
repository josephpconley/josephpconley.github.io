---
layout: post
type: post
tags: golf pgatour python django
title: Atomic Events and PGAStream
subtitle: Tracking every hole on the PGATour
published: true
---

Cal Newport, in his book [So Good They Can't Ignore You](https://www.goodreads.com/book/show/13525945-so-good-they-can-t-ignore-you?from_search=true&search_version=service), uses narratives from successful careers to argue, among other things, that "to maximize your chances of success, you should deploy small, concrete experiments that return concrete feedback".  Iterating quickly on these small bets can lead to inspiration, increase your chances for success and open up new possibilities.  One recent wager of mine, [BirdieBot](http://www.twitter.com/birdie_bot), tweets every birdie (or better) for the current PGATour event.  I built this with no specific purpose in mind, just wanted to exercise some interesting frameworks and tools (like my own [DataCombinator](http://www.datacombinator.com)).  One concrete set of feedback I noticed right away is the audience it soon found: Daily Fantasy Sports (DFS) players.  However, I noticed the follower count would tend to fluctuate wildly, spiking up and then going almost immediately back down.  The reason became quite obvious: the bot, like Twitter, is a firehose of information (I don't even follow the bot).  So, the logical next step ([adjacent possible](http://www.josephpconley.com/2016/02/10/monkey-island-innovation.html) time) would be, how could I **filter** BirdieBot to only show the players and scores I cared about?  

This leads us to bet #2, [PGAStream](http://pga.jpc2.com).  This looks very similar to Twitter, yet its stream is a record of every hole completed from every player in the current PGATour event (alongside the leaderboard).  The novelty here is that you can filter the stream by player and by score type.  Now the DFS players can create a stream with their stable of golfers.  Or fans who want to see the best and worst holes can filter scores to only show the extreme outliers.  Or maybe there's other applications I haven't thought of, especially as I add more filter criteria and track more events of interest like hot/cold streaks or if a golfer is on 59 watch.

<img src="/assets/PGAStream.png" class="img-responsive img-rounded" alt="PGAStream"/>
&#x20;<br>

The bigger point here is that users should be able to customize their data consumption down to an atomic level.  The approach should be similar to Excel, which has a few simple concepts yet can act as a [horizontal platform](http://www.joelonsoftware.com/items/2012/01/06.html) solving an entire universe of present and future problems.  As consumers of information, however, we get little to no control over how we digest data.  It's a very passive experience, we're constrained by software's functions which usually only benefit the software itself (think sharing or retweeting on a social network).  I want to build and use software that empowers users to have complete control over their data at a very granular level.  PGAStream is a small start, I'm hoping to extend this idea to other realms (economic indicators, stock quotes/alerts) such that all of our media consumption can be customized.

Tech side note: I figured I'd expand my horizons a bit and learn some new tech in the process, so I built it using Python/Django.  Having spent a lot of time in the Play/Scala world, I do appreciate the "batteries included" approach in Python and Django.  I certainly get a better sense of the pros and cons of a different language by actually using it rather than reading someone's blog post, so I'd encourage developers to constantly experiment with other languages.  Learning a new language/framework can help revisit your assumptions, understand design decisions better, and maybe spark interest in a new way of thinking.

You're welcome DFS folks, let me know if you have any feedback!
