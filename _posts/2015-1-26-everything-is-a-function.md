---
layout: post
type: post
tags: api DataCombinator integration json rss
title: Everything is a Function
subtitle: How to program the Internet
published: true
---

I've been working on a platform that would help free us from our [dependence on apps](http://www.josephpconley.com/2014/12/08/apps-are-dead.html).  I'm hoping this ends up being a [horizontal tool](http://www.joelonsoftware.com/items/2012/01/06.html) with a combinatorial number of use cases (hence the name DataCombinator).  The main idea is to turn all digital interactions into simple functions (a la Excel) which can be composed to do cool stuff.

Here are the main concepts you need to know to understand how to execute and compose these functions

- HTTP methods/requests and APIs ([tutorial](http://www.restapitutorial.com/))
- JSON ([tutorial](http://www.w3schools.com/json/default.asp))
- JSONPath ([tutorial](http://goessner.net/articles/JsonPath/))
- Handlebars.js for templating ([tutorial](http://handlebarsjs.com/))

That's it.  Composing functions is as easy as writing a sequence of commands (separated by semi-colon).  Each function will return a valid JSON value, which will be passed to the context of the subsequent function.  <strike>The "current" JSON value can be accessed using the `_` character, and can also be used in argument strings using the Handlebars.js syntax.</strike>

**UPDATE** As I was going through some various examples it became clear to me that I needed both the most recent JSON value as well as past ones, so to that end I've modified the scripting language to use `this` as the current JSON value and `_` to represent the array of all results in the script (with the 0th entry being the JSON value representing arguments passed to the script).  I've updated the examples below accordingly.

## Examples

To quote George R. R. Martin, "Words are wind", so let's look at some actual code.  You can test them out and see the full list of available functions [here](http://www.datacombinator.com/worksheet).  If you're confused by any of the following examples, try out the worksheet as each function call result is shown.

### Weather Alerts
Here's an example of a custom weather alert service (one of the [most popular IFTTT recipes](https://ifttt.com/recipes/popular)).

<script src="https://gist.github.com/josephpconley/adcca77c201b3f5a55b7.js"></script>

This script does the following:

- Performs a geo lookup using [Google Maps](https://developers.google.com/maps/documentation/geocoding/) to get the geocoding details of the address we're interested in (in this case my office address).
	- I added a Handlebars.js helper called `urlEncode` to facilitate things like url encoding
- Navigates the result to find the latitude and longitude
- Gets the short-term weather forecast from [Forecast.io](https://developer.forecast.io/) (sign up to get your own api key) using the `lat` and `long` from the previous call (using Handlebars to pass the values)
- Sends an SMS message to my phone if it's below 40

Pretty straightforward.  The beauty of this is we can customize it to our preferred notification channel, and could easily swap out the SMS call with e-mail or Twitter.

### Auto-generate RSS based on website updates

Despite the demise of Google Reader, I've always been a big fan of RSS.  It tends to be a less noisy channel of information than social media, allowing for less frequent but longform communication.  This example checks the AV Club for reviews of new episodes for a given show (I chose game-of-thrones-experts for this example, you'll have to inspect the URL for your show) and generates an RSS feed.

<script src="https://gist.github.com/josephpconley/11a556fbecd20f159eb8.js"></script>

- Performs a web request to get the html source code of the webpage
- Performs an XPath query to extract the HTML elements we need (and implicitly converts to JSON)
- Uses the resulting JSON to build an RSS xml file from a Handlebars.js template

This has some more advanced concepts like [XPath](http://www.w3schools.com/xpath/) (not to mention knowing proper RSS formatting), but the script is still relatively easy to understand.

### Website monitoring

As an owner/maintainer of a few websites, it's important to know when any of them go down.  There are several free services that will do this for you, but what if we wanted a customized view into our website uptime?  Let's write a script that monitors a [really cool webapp you can use to track your golf scores and handicap, SwingStats](http://www.swingstats.com/)

<script src="https://gist.github.com/josephpconley/798a18bc5f789d6747c4.js"></script>

- Performs a web request to the site we're monitoring
- Save the response info in a MongoDB database collection
- If the status is not 200 (OK), then send an e-mail

This not only handles notifications but saves website data in a database (MongoDB).  We can then build a separate script to access this data and calculate uptime percentage for SLA purposes.

## Next Steps

I hope these examples were interesting.  DataCombinator will soon have the ability to save scripts, expose them as API endpoints, and schedule script execution on a specific time interval using [Cron expressions](http://en.wikipedia.org/wiki/Cron).  The next version willl also expose your favorite social network functions, which could lead to things like one massive interleaved activity stream for all of your social media sites.  If you're interested in updates, follow along on the [DataCombinator tag](http://www.josephpconley.com/tags/datacombinator/) or [sign-up for email updates](http://www.datacombinator.com).
