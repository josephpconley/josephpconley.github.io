---
layout: post
type: post
tags: javascript knockoutjs nodejs totaljs 
title: Build responsive webapps using total.js and Knockout.js
subtitle: Rapid web application development powered by Node.js and NoSQL
published: true
description: Use total.js and Knockout.js for rapid development of responsive webapps
---

I've recently spent time evaluating the myriad universe of [Node.js](http://nodejs.org/) web frameworks.  My motivation was twofold: to get acquainted with the increasingly popular Javscript server-side technologies, and learn a simple framework wherein I could quickly build a reasonably complex web application.  As my search wore on, the following criteria for such a framework began to emerge

1.	Convention over configuration (i.e. reasonable MVC patterns, routing, etc.)
2.	Integrates easily with other libraries/good framework utilities
3.	Wealth of practical examples

After spending much time traversing the impassioned treatises of StackOverflow and consulting the hallowed counsel of the ThoughtworksRadar, I have found the simplicity of the [total.js framework](http://www.totaljs.com/) most appealing.

<table class="image">
	<tr><td><a href="http://www.totaljs.com" target="_blank"><img src="/assets/totaljs-logo.png" alt="total.js logo"/></a></td></tr>
</table>

&#x20;<br>

## Criteria

### Sensible conventions

Total.js follows the model-view-controller convention to much success.  Simply place the relevant code in models/views/controllers folders and you're good to go.  In addition, the routing is very simple to wire up, requiring a simple declaration mapping each route to a Javascript function.  Here's an example of a typicaly RESTful routing situation:

	exports.install = function(framework) {
		framework.route('/users', listUsers)
		framework.route('/users', addUser, ['post'])
		framework.route('/users/{id}' updateUser, ['put'])
		framework.route('/users/{id}' deleteUser, ['delete'])
	};

	function listUsers(){}
	function addUser(){}
	function updateUser(id){}
	function deleteUser(id){}

### Plays well with others

Total.js enjoys all the benefits of any Node.js framework, namely access to the treasure trove of libraries in `npm`.  However, I was pleasantly surprised to find a [sizeable collection of built-in utlities](http://docs.totaljs.com/Framework/) to manage common web application functionality like file operations, email, and websocket administration.  There is also the option to build your own modules by writing custom code which can hook into different events in the web application lifecycle.  Total.js [has already built a list of modules](https://github.com/totaljs/modules) to get you started.

### Examples

One potential drawback here is the relatively small size of collaboration/interest in this framework as of now (try googling a nontrivial issue), but overall I've found that the wealth of examples provided in [totaljs examples](https://github.com/totaljs/examples) answered most if not all of my questions.

## Obligatory TODO App

<table class="image">
	<tr><td><a href="http://www.knockoutjs.com" target="_blank"><img src="/assets/ko-logo.png" alt="Knockout.js logo"/></a></td></tr>
</table>

&#x20;<br>

As I evaluated Node.js frameworks, I noted that the most popular example app was the TODO application.  In that spirit, I've created a [basic TODO app using total.js and Knockout.js](https://github.com/totaljs/examples/tree/master/knockoutjs-todo).  This app took roughly 20 minutes to build, and most of that time was spent refreshing my memory on knockout.js data-binding syntax.

## Caveats

Total.js minifies html/cs/jss by default, so debugging javascript is nigh impossible if you write javascript code in `<script>` tags in your html.  If you plan on doing significant Knockout.js development, I'd highly recommend keeping all viewmodel code in a separate Javascript file, and setting the js-minify flag in your config-debug file to false.

## Conclusion

There's no lack of Javascript web frameworks, and like any technology toolbox it's important to use the right tool for the job.  While I've only just scratched the surface of the framework, I would highly recommend total.js to beginners and experts alike.