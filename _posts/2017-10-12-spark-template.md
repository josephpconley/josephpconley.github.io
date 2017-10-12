---
layout: post
type: post
tags: [books, spark, sbt, scala]
title: High-Leverage Development with Giter8 Templates
subtitle: Using `sbt new` to quickly create Spark projects 
published: true
---

[Edmond Lau](https://twitter.com/edmondlau) talks a lot about leverage in his book 
[The Effective Engineer](https://www.goodreads.com/book/show/25238425-the-effective-engineer?from_search=true), 
a term he borrowed from Andy Grove's [High Output Management](https://www.goodreads.com/book/show/324750.High_Output_Management?ac=1&from_search=true).
Both are excellent reads, especially for programmers looking to maximize the impact they have on their teams.
The term _leverage_ gets to the heart of this. It describes activities that create a disproportionate amount of value.
This feels like a much more elegant description than "10x/rockstar/ninja developer" or whatever cliche that stokes
the egos of the programmer-gods.  It places the focus on *output*, where it belongs!

Some examples of high-leverage activities Lau mentions include:

- improving the onboarding processes for new hires via tutorials, documentation, and notebooks (i.e. labs)
- creating tight feedback loops to quickly validate ideas (e.g. use a REPL or a notebook!) 
- writing tools to make you and other developers more efficient

In this spirit, I've created a [Giter8](http://www.foundweekends.org/giter8/) template to show how to 
[create an SBT-based Spark project](https://github.com/josephpconley/spark-seed.g8) with the following accouterments:

- utilities for logging and writing dataframes in common formats
- configuration via [Typesafe Config](https://github.com/typesafehub/config)
- building the fat jar via [sbt-assembly](https://github.com/sbt/sbt-assembly)
- release support via [sbt-release](https://github.com/sbt/sbt-release)
- support for running your Spark job in Intellij

This has saved me a significant amount of time in starting new Spark jobs or testing out quick proof-of-concepts.
Simply call `sbt new josephpconley/spark-seed.g8` and you're all set!  Enjoy!  