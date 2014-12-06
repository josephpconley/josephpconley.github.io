---
layout: post
type: post
tags: golf swingstats
title: Equitable Stroke Control
subtitle: Calculating your golfing handicap the correct way.
published: true
---

Before [SwingStats](http://www.swingstats.com), I maintained my golf handicap index like most casual golfers, via formulas in an Excel spreadsheet.  While effective (though inelegant), it became difficult to manage as the number of rounds and courses increased.  Furthermore, I soon learned about Equitable Stroke Control (ESC), a formula which applies net scores to your handicap index, thereby dampening the effects of spectacularly bad holes (a regrettably common occurrence of my game).  I didn't think many golfers were aware of this methodology so I'll explain it briefly here.

To implement ESC for a given round, we need to calculate a **Course Hanidcap** using this formula:

$$
	\text{Course Handicap} = \frac{\text{your handicap index} * \text{slope of course}}{113}
$$

If you don't have an established handicap index yet, you would use the maximum handicap index of 36.4 for men and 40.4 for women.

Once you have the course handicap for your round, you can find the maximum score for a given hole using the following table.

<table class="table table-striped table-bordered table-condensed">
	<thead>
		<tr>
			<th>Course Handicap</th>
			<th>Maximum Score</th>			
		</tr>			
	</thead>
	<tbody>
		<tr>
			<td>0-9</td>
			<td>Double Bogey</td>
		</tr>
		<tr>
			<td>10-19</td>
			<td>7</td>
		</tr>
		<tr>
			<td>20-29</td>
			<td>8</td>
		</tr>
		<tr>
			<td>30-39</td>
			<td>9</td>
		</tr>
		<tr>
			<td>40 or more</td>
			<td>10</td>
		</tr>
	</tbody>		
</table>	

Using this table, you would go through each hole and determine the net strokes for the hole (the minimum of your score and the maximum score), and add up the net strokes giving you a net total for the round.  It is this net total which you should apply towards your handicap calculation.  For those interested here's a good article on [calculating your own handicap](http://golf.about.com/cs/handicapping/a/howcalculated.htm).  I won't go into detail on the handicap calculation as I would simply advise you to use SwingStats!

##ESC on SwingStats

SwingStats performs the ESC calculation automatically when generating your handicap.  You can see the result for each round by looking at the NET score once your round is saved (in parentheses).  Here's my [most recent round](http://www.swingstats.com/rounds/405), where you can see my raw score of 93 and net score of 92.  I earned a net 7 for the second hole as my handicap is 14.9, making the max on any hole a 7.   

![Equitable Score Control Example](/assets/ESC.bmp)

##Big Data Analysis for your Golf Game

Equitable Score Control is just one of the many benefits of using a scoring system like [SwingStats](http://www.swingstats.com).  We're working on solutions to extract intelligence from our database of rounds to pinpoint areas of your game that need the most work.  Check back for future updates, or [let us know](http://www.swingstats.com/contact) if you have any requests or feedback!