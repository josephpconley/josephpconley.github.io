---
layout: post
type: post
tags: [cto, startup, software, scala]
title: Orwell's Rules for Writing (Software)
subtitle: All code is equal, but some code is more equal than others.
published: true
---

I'm in the middle of reading [Churchill and Orwell: A Fight for Freedom](https://www.goodreads.com/book/show/32301946-churchill-and-orwell?ac=1&from_search=true&qid=O3MVwYzvHh&rank=1) and so far really enjoying the parallels drawn between two of history's most important figures.  Both had military experiences which informed their worldviews, both suffered serious career setbacks, and both keenly saw the threat of totalitarianism for what it was and worked tirelessly to prevent its spread.

About midway through the book the author enumerates Orwell's six rules for writing.  Examples follow of Churchill having similar thoughts on the brevity, economics, and power of language.  So I thought I'd help translate these ideas for any software engineer who might care to listen:

## 1. Never use a metaphor, simile, or other figure of speech which you are used to seeing in print. 

Never use common variable names like `data`.  That's not very meaningful, all of this stuff is data!  Metaphors and simile don't tend to be useful unless the ideas are truly core to your abstraction.


## 2. Never use a long word where a short one will do.   

Be thoughtful when you name things.  Variables, functions, and classes should have the shortest and most meaningful names possible.  You're building a mental world from scratch, and the language you choose defines how everyone else will think.

Conversely, unless your indexing over a list, single-letter variables are probably too short.  Seeing variables `a` through `z` littered about code without any context or meaning is plain mean.  In my early days of engineering, I heard stories about a paranoid contractor who **intentionally** used obscure naming to make his code impossible to read, thus making him "indispensable".  Fool of a Took!  It didn't work, and I think both Orwell and Churchill would agree there's a special rung in Hell reserved both [for people who waste good scotch](https://www.youtube.com/watch?v=4xCasP9VZUc) and engineers who use language to such evil ends.

## 3. If it is possible to cut a word out, always cut it out.

Prefer functional methods and languages where possible, i.e. choose Scala over Java.  This can dramatically reduce lines of code, and help you think at a higher level of abstraction that is generally a positive trait for folks who live and create worlds of abstraction most of the day.  Yes imperative code might _seem_ easier to write but if you have to do anything at scale you need tools like this in your toolbelt.


## 4. Never use the passive where you can use the active. 

Have clear separations of concerns in how you architect systems.  If a single method does a dozen different tasks, refactor it. This empowers your objects to have clear and distinct jobs and focus on doing them well.  This allows to build high-performing systems at scale if you can reliably compose modules that do what they're supposed to do.


## 5. Never use a foreign phrase, a scientific word, or a jargon word if you can think of an everyday English equivalent. 

When you talk to the business folks, speak in simple terms.  Trust me, they know you're smart, you don't need to show off.  Speaking in plain English helps you show that you're more than a code monkey, and helps them learn more about software and feel empowered about the product.  

## 6. Break any of these rules sooner than say anything outright barbarous.

If your startup's MVP needs to work for tomorrow's demo, then yes by all means write your imperative for-loops and mutate state to your heart's content.  But be mindful when the exception starts to become the rule.
