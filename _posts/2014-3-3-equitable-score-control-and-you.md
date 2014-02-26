---
layout: post
type: post
tags: golf swingstats
title: Equitable Stroke Control (ESC) and You
published: false
---

Before [SwingStats](http://www.swingstats.com), I maintained my golf handicap index similarly to most amateur golfers, via formulas in an Excel spreadsheet.  While that worked to a certain extent, it became difficult to manage as the number of rounds and courses increased.  Furthermore, I soon learned about Equitable Stroke Control (ESC), a formula used to produce a net score to apply to your handicap index, dampening the effects of spectacularly bad holes (a regrettably common occurrence of my game).  I didn't think many amateur golfers were aware of this methodology so I'll explain it briefly here and then casually reminder you the reader that SwingStats does this calcultation for you automatically (and for free).

To implement ESC for a given round, we need to calculate a course hanidcap using this formula:

$$
	\text{Course Handicap} = \frac{\text{handicap index} * \text{slope of course}}{113}
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

Using this table, you would go through each hole and determine the net score, giving you a net total for the round which you would apply towards your handicap.

Why SwingStats

Coming soon - Big Data!