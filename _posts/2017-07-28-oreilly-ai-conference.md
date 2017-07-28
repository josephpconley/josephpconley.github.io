---
layout: post
type: post
tags: [chariot, conferences, ai, ml]
title: The O'Reilly AI Conference in NY
subtitle: Getting to know our robot overlords
published: true
---

<p><img src="/assets/ainy.jpg"/><br><small>Photo credit: <a href="https://conferences.oreilly.com/artificial-intelligence/ai-ny">O'Reilly AI</a></small></p>

I recently had the pleasure of attending the nascent [O'Reilly AI Conference](https://conferences.oreilly.com/artificial-intelligence/ai-ny) in Midtown Manhattan.  The event focused on the technical progress being made in deep learning, reinforcement learning, and cognitive systems that augment human intelligence.  These advancements have already had a significant impact in many walks of life like autonomous driving, health care, and knowledge work.  My impression from the conference was that while there's been amazing gains in specific domains (i.e. narrow AI), there hasn't been much focus yet on practical paths to developing fully-thinking, superintelligent systems (i.e. strong AI).

## Day One - Machines as Thought Partners

The talks I enjoyed the most on day one focused on building intelligent systems that work as "thought partners" with humans.  David Ferrucci, the creator of IBM's Watson and [Elemental Cognition](https://www.elementalcognition.com/), is creating intelligent systems which build a foundation of knowledge via dialogue with human counterparts.  In this way, an intelligent system could learn much like a child does, asking questions and learning from experience.  Whereas most predictive systems tend to rely on patterns in data, these systems would try to build actual knowledge that considers things like context, language, and even culture.  

<iframe src="https://player.vimeo.com/video/190292710" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><br>

Another talk that I really enjoyed was about advanced [Natural language generation (NLG)](https://en.wikipedia.org/wiki/Natural_language_generation) by Kristian Hammond of [Narrative Science](https://narrativescience.com).  He talked about intelligent systems as storytellers.  Instead of presenting fancy visualizations for a data table in Excel, such a system could parse the table, do statistical analysis, and use NLG to tell you what's interesting and important about the data.  I love the efficiency in that!  Developers spend so much time massaging, transforming, and visualizing data when really the endgame is to answer a few simple questions.  Advances in NLG hold the promise of minimizing all this ceremony, freeing engineers up to solve more interesting problems and making us more productive.

Ideas like these can really challenge one's perspective on the future of work.  Katy George of [McKinsey & Co.](http://www.mckinsey.com/) spoke about the impact of automation on jobs. She mentioned that very specific classes of jobs will probably be automated by AI soon, like collecting and organizing data (e.g. administrative/data entry) and predictable physical work (e.g. driving a truck).  Interestingly, though, wages aren't a strong indicator of what jobs can be automated.  She mentioned landscaping as a low wage job that would be tough to automate, while high-wage lawyers and paralegals risk being replaced by [systems that do automated research and mine large datasets](https://www.ft.com/content/5d96dd72-83eb-11e6-8897-2359a58ac7a5).

I think everyone needs to reflect on the future of work.  I've been holding on to the belief that my job of software engineer was *very unlikely* to be replaced by a machine.  [A recent Bloomberg article](https://www.bloomberg.com/graphics/2017-jobs-automation-risk/) highlights a study from the University of Oxford predicting what jobs are at risk for automation, and I was surprised to find "Computer Programmer" roughly in the middle.  While I'm still convinced that I won't be replaced by AI in the short term, I can certainly envision a future where there's less explicit code being written and more reliance on probabilistic models and more of the repeatable grunt work of programming is handled by AI.

<a href="http://www.businessinsider.com/robots-overtaking-american-jobs-2014-1" target="_blank"><img src="http://static1.businessinsider.com/image/52e2b6336bb3f7da630fd543-636-/sdfvfscreen-shot-2014-01-22-at-11.12.29-am.gif"/></a><br>

## Day Two - Reinforcement Learning Systems

Day Two had some interesting talks on reinforcement learning, especially in the keynotes.  [Anca Dragan from UC Berkeley](https://people.eecs.berkeley.edu/~anca/) talked about the development of autonomous driving systems, and it was neat to see the iterations they went through to get a usable system.  Their initial effort resulted in an overly defensive autonomous driver.  When driving on a crowded California highway, the system would wait too long for a safe cushion to change lanes, and when other cars at a 4-way intersection never came to a full stop, it would confuse the AI and prevent it from moving.  So after some tinkering, the system *itself* organically developed a more pragmatic strategy that merged defensive driving with a more collaborative approach that worked much better with live traffic.

Another neat example was Libratus (Latin for "balanced"), a heads-up no-limit Texas Hold 'Em bot with a three-pronged strategy to playing poker.  It starts with computing a Nash Equilibrium based on the abstraction of the game (they use an abstraction to reduce the problem space).  Then, during the later stages of the hand, it would employ an endgame solver to help analyze all possible permutations of play.  Finally, it would analyze *its own* historical play to find its own weaknesses and improve on them.  Consequently, Libratus [beat the world's best poker players handily](http://www.pokerlistings.com/libratus-poker-ai-smokes-humans-for-1-76m-is-this-the-end-42839), earning over $1 million in the process.  Though this might seem like a narrow application of AI, systems like Libratus could provide insight into other applications where imperfect information with one or more agents is relevant.

<iframe width="640" height="360" src="https://www.youtube.com/embed/jLXPGwJNLHk" frameborder="0" allowfullscreen></iframe><br>

Finally, the keynote given by Peter Norvig, one of the fathers of AI, stressed how AI could revolutionize software development.  He spoke about a future where engineers were more like teachers than plumbers, instructing machines how to model certain processes at a higher level. In contrast, today's software engineers are essentially micromanagers, writing every single instruction for the machine to handle.  It's refreshing to picture a world where coders could effectively build systems with more higher-level thinking but still have the confidence that the instructions will be interpreted and implemented without loss of meaning or control.

<iframe width="640" height="360" src="https://www.youtube.com/embed/mJHvE2JLN3Q" frameborder="0" allowfullscreen></iframe><br>

## Reflection

I was overwhelmed by the sheer impact that AI is already having in dozens of different fields.  While the field of AI has gone through trends of popularity and decline in the past, it's hard to ignore the current wealth of possibilities given the advent of cheap scalable computing power.  My one hope for future conferences (which wasn't adequately addressed at this one) is more discussion of how to build AI in a balanced, secure manner.  The debate on the safety of AI [is currently raging](https://www.recode.net/2017/7/25/16026184/mark-zuckerberg-artificial-intelligence-elon-musk-ai-argument-twitter), with intelligent people on both sides of the issue.  It's important that well-meaning thinkers continue to debate this topic, because the capabilities of AI could very well grow exponentially beyond our control.

I think what's most encouraging to me (as a software engineer), is that since this field is still relatively new, we as engineers have the opportunity to help shape its direction.  It's a good reminder that technology isn't inevitable, it gets built by people, so if you're concerned about the direction of AI, get involved!

## Further Reading
- [The AI Revolution: The Road to Superintelligence - Wait But Why](https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html) - Funny and accessible overview of AI and how it could evolve.
- [Superintelligence: Paths, Dangers, Strategies by Nick Bostrom](https://www.goodreads.com/book/show/20527133-superintelligence?from_search=true) - one of the more popular tomes on AI, this gives a thorough treatment of the history and context of AI.  I'd hazard to say this is required reading if you're interested in AI.
- [AI Course on edX](https://www.edx.org/course/artificial-intelligence-ai-columbiax-csmm-101x-0) - Good mix of theory and some hands-on work with Python
