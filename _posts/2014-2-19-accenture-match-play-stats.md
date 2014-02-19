---
layout: post
type: post
tags: golf scala statistics
title: Accenture Match Play Statistics
published: true
---

February madness is here!  The [Accenture Match Play Championship](http://www.worldgolfchampionships.com/accenture-match-play-championship.html) starts today, and although the usual big names of Tiger, Phil, and Adam Scott are absent this year, there still promises to be some drama.  Can Matt Kuchar become the first player not named Tiger to go back-to-back?  Will Jimmy Walker improve upon his obscene winning percentage this year?  Will past Ryder Cup emotions fuel players to victory (looking at you Mr. Poulter)?  We'll find out.

The other source of drama is due to the vagaries of the match play format.  Underdogs regularly upset favorites, and only one person has won the event as a number one seed ([Tiger](http://en.wikipedia.org/wiki/WGC-Accenture_Match_Play_Championship)).  This makes completing a bracket the ultimate exercise in futility.  While I'm sure [Warren Buffett's billion dollar NCAA wager](http://www.cbssports.com/collegebasketball/eye-on-college-basketball/24416823/warren-buffett-dan-gilbert-offering-1-billion-for-perfect-tourney-bracket) is very safe at odds of 1 in 9.2 quintillion, I'd imagine a similar wager on this tournament would be even safer (though statistically it's the same odds).

Anyways, I'll be looking at some random statistics as the tournament progresses.  One such stat is average holes played per match.  If you fill out your bracket on [pgatour.com](http://fantasy.pgatour.com/), you're asked to put in a tiebreaker of total holes played by the champion of the tournament.  A champion will have played six matches in total.  For each match, a winner can play less than 18 holes, the full 18, or more than 18 if still tied (here's a good primer on [match play scoring](http://golf.about.com/od/beginners/a/matchplayscore.htm) for the uninitiated).  I took a rough guess that on average, a match ends after the 16th hole.  But I wanted to be sure (I'm in a money league for my bracket, can't hold anything back).  So naturally, I turned to programming.

Here's a very simply [program to gather data on past matches](https://github.com/josephpconley/scala/blob/master/scrape/src/main/scala/com/josephpconley/golf/MatchPlay.scala).  This parses out the holes played for roughly 2,000 matches in this event from 2005 to present.  The result was that the average holes played per match is 16.64116095.  For the tiebreaker, you'd multiply this by 6 to get (roughly) 100.

That's it for now, I'll try to dig deeper and come up with more interesting stats.  If you have any suggestions feel free to comment!  