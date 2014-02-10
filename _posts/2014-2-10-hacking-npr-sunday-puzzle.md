---
layout: post
type: post
tags: knockoutjs playframework puzzles scala
title: Hacking NPR's Sunday Puzzle, and other Puzzling Tools
published: true
---

I'm a big fan of puzzles.  I'll often start my day attempting the Philadelphia Inquirer's jumble and crossword, with varying degress of success.  One puzzle I never miss is [NPR's Weekend Edition Puzzle](http://www.npr.org/series/4473090/sunday-puzzle) featuring New York Times puzzle editor Will Shortz.  At the end of each segment, he poses a question to the audience, and occasionally these questions can be solved with the help of programming.  To that end, I've built an app to help non-programmers solve these puzzles.  I've also added common puzzle utilities like an Anagram checker and a Scrabble solution generator.

You can find a running version of the puzzle solver [here](http://app.josephpconley.com/puzzles).  The Scala library of the puzzle utilities can be found [here](https://github.com/josephpconley/scala/tree/master/puzzles).  This project also has an npr package which shows examples of programs written to solve past NPR puzzles.

## Puzzle Solver
This single-page app searches through a specified list of words searching for one of three things: anagrams, potential Scrabble solutions, or most powerfully, a regular expression.  We'll use this last mode to solve a recent NPR puzzle.

### Puzzle Modes

#### Anagrams
This mode will search for all potential anagrams of the input word.  Helpful for solving the jumble commonly found in your newspaper.  For example, here are today's four jumble clues from the Inquirer:

<div class="well well-lg">
	GREEV
	WORNC
	KNITSY
	KRUTYE	
</div>

Setting the app controls to Mode = Anagram and Word List Source = Scrabble (a good list source for most purposes), we set Input once for each jumble and after hitting Submit, we get one proper anagram for each jumble.

#### Scrabble
This mode will search for all possible valid Scrabble words based on the letters (i.e. your Scrabble hand) provided.  You can also specify how many wild cards (i.e. "blanks") are in your hand.  This is useful not only to help find solutions but to verify solutions as well (faster than leafing through a Scrabble dictionary).

#### Regular expressions
This is the most powerful mode.  This will return all words matching a valid Java regular expression.  You can find a good tutorial about Java regular expressions [here](http://www.vogella.com/tutorials/JavaRegularExpressions/article.html).

### Word Lists
I've gathered two common word lists, a list of valid Scrabble words mentioned [here](http://pzxc.com/embed-flash-scrabble-dictionary-text-file) and the [UNIX word list](http://www.freebsd.org/cgi/cvsweb.cgi/src/share/dict/web2?rev=1.12;content-type=text%2Fplain).  I've also added a space to add a custom list of words to search.

## Technology
I've built this app using [Play Scala](http://www.playframework.com/documentation/2.2.x/ScalaHome) as the backend.  After importing my puzzles library, here's the relevant controller code:

{% gist 8862621 %}

I probably could have handled the JSON a bit safer by using a Reads[T] object to handle the parsing, but as this app was fairly simple I used the unsafe conversion JsPath.as.  Please don't think less of me!

I've also employed [Knockout.js](http://knockoutjs.com) to manage the front-end functionality.  Knockout.js is a lightweight MVVM framework which manages DOM updates automatically and succinctly, ensuring that your front-end code is not a monolith of jQuery calls.  Here's the code for the front-end:

{% gist 8862697 %}

And that's it!  A good future exercise would be to stream the solutions reactively, especially when dealing with a long word list.  This would be done using Play's [Enumeratee library](http://www.playframework.com/documentation/2.1.x/Enumeratees).  If anyone's interested in that I can post a follow-up detailing that solution.

## Puzzle Solution - Double S (Non-Programmers)
Now our tool is ready to help us solve a recent puzzle.  Here's the question, reprinted from [NPR's website](http://www.npr.org/2014/01/26/266210037/take-synonyms-for-a-spin-or-pirouette):

<div class="well well-lg">What word, containing two consecutive S's, becomes its own synonym if you drop those S's?</div>

Using Regex mode and our Scrabble word list, we can define the regular expression .*ss.* to return all words with a double S:

![Regex Step One](/assets/regex.bmp)

From there, we use Excel to store this list in the first column.  We can then copy this list in the second column and do a Find/Replace to remove instances of "SS".  We could inspect each row for synonyms but as we have 1976 results, that's a lot of words to inspect.  To further narrow down our choices, I used Excel to transpose the second column into one row, copy that into a text file and do another Find/Replace by highlighting the space between each word and replacing with a vertical bar.  This gives us another regular expression that should look like this:

	abbe|aby|abyes|...|zestle|ziple|zonele

Using that regular expression, we can use our Puzzle Solver to determine which words in the list are valid words and which aren't (we only care about words that are valid).  This second search takes significantly longer, but we'll eventually get a list back of 156 valid words.  Plugging this list back into Excel, we can use a VLOOKUP to identify the pairs of words which are valid.  After sorting to see valid word pairs first, we can inspect to see which pairs are synonyms.  Luckily, the answer appears fairly early in the list (spreadsheet can be downloaded [here](https://github.com/josephpconley/scala/raw/master/puzzles/src/main/resources/SS.xlsx)):

![Regex Solution](/assets/SS.bmp)

## Puzzle Solution - Double S (Programmers)

The previous non-coding solution might have seemed a bit convoluted.  A much simpler method would be to use my Scala library directly to find the solutions, which can be done with as little as four lines of code:  

{% gist 8915428 %}

## Conclusion
If you enjoy NPR's Sunday Puzzle, I'd highly recommend [Blaine's Puzzle Blog](http://puzzles.blainesville.com/) as an excellent companion resource.  This blog community offers tantalizing, interesting hints for the solution of the puzzle and often digress into other challenging puzzles as well.

Happy puzzling!