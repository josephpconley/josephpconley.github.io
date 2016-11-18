---
layout: post
type: post
tags: [java, maven, aop]
title: AOP and AspectJ Introduction and Quickstart
subtitle: Fear of AOP cross-cuts deeper than swords
published: true
---

[Aspect-oriented Programming](https://en.wikipedia.org/wiki/Aspect-oriented_programming) (AOP) is a fairly novel concept in the world of programming.  Most coders (in my generation at least) were brought up on [Object-oriented programming](http://searchsoa.techtarget.com/definition/object-oriented-programming).  You define entities using classes with properties and methods (behavior), these entities talk to each other, and before you know it you've created an entire universe of objects doing your bidding. 

What are some issues with that approach?  One problem is dealing with behaviors that should be shared by most or all objects in your universe, like logging.  You could simply create a public global object and let your classes access that, but then your class definitions get muddled by logic that's not directly related to the object.  This is a recipe for disaster, we want our code to be small and modular, not big and monolithic!

AOP to the rescue!  AOP and it's most popular implementation [AspectJ](https://eclipse.org/aspectj/doc/released/progguide/starting-aspectj.html), provide a nice framework for abstracting out cross-cutting functionality and having an OOP framework use those concerns.  Modularizing functions like logging, security, and transactionality can then lead to a much cleaner codebase.  It also forces the developer to think about what services are core to the application and which are orthogonal and can be split out into its own module.  All good things! 

Of course there are tradeoffs to using AOP.  It adds complexity to the compilation process as it typically modifies bytecode to create proxy methods that execute the modular code.  Defining pointcuts that match one or more class definitions or methods could lead to unexpected behavior as the codebase evolves.  Ultimately, I think these tradeoffs are minimal in comparison to the gains in code stability.  Every tool has tradeoffs, so it's important to always be mindful of the technology you're choosing as you're building software.

Implementing such a framework, however, can be a daunting task for even the bravest of souls.  I spent the better part of this week trying to tame the dragons of AspectJ, Maven, and Spring.  So to aid any other weary travelers who just want a dead simple example of AspectJ working in Java with annotations, [here it is](https://github.com/josephpconley/aspectj-java-quickstart).  Enjoy!