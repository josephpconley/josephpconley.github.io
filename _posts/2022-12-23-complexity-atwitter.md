---
layout: post
type: post
tags: [cto, software]
title: Complexity A-Twitter
published: true
---

As a software executive and engineer, it was fascinating to hear Elon's chat with the Twitter team about the tech stack:

<iframe width="700" height="450" src="https://www.youtube.com/embed/vc3i2Q49kWI" frameborder="0" allowfullscreen></iframe><br>

I really appreciated hearing the intense focus on customer ROI.  This is clearly one of the key constraints that the new
team is operating under in their mission to get to breakeven (Twitter currently loses ~3.5B a year).
This is one of the things I admire most about Elon: his hyper-practicality.
Why would an advertiser spend marketing dollars(specifically in the face of a recession) if they didn't have a clear idea of the ROI?
Between that and cost-cutting initiatives, it seems like Twitter is on the track to a more focused, disciplined operating structure.

What struck me the most though is the focus on removing complexity from the software stack.
Removing complexity (i.e. paying down tech debt) is not something you can tackle every few years, but has to be a constant vigilence.
Sure there are times (especially during your startup phase) where you choose to incur this debt in the face of customer demands
or budgetary constraints.  But like all forms of debt, interest accrues.
If you don't pay it down you could be left with a stack like Twitter's, 
replete with 17 different microservices that while decoupled still have significant implicit dependencies, making any code change non-trivial.

Another symptom of excess complexity is onboarding time: how long does it take a new hire to ramp up and commit a small code change?
The Twitter team mentions that today it takes at least a few weeks for a new hire to get setup and productive, which in today's day and age seems like an eternity.
Between IaC, Docker, and other automation tools, onboarding ramp-up time should take days, not weeks.
(N.B. I'm just as guilty of giving onboarding/documentation short shrift, but as a tech executive what could be more important than keeping your team productive and thereby happy?)

I'm excited to see what Twitter can do over the next 18 months.  It does seem like a few recent changes has improved performance.
Especially as, like Elon said, "we're not splitting the atom here".  Compared to his other endeavors this should be a cakewalk!
