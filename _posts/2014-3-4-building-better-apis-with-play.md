---
layout: post
type: post
tags: api playframework point.io scala
title: Building better APIs with Play! (code examples)
published: true
description: This is the technical companion to my Point.io post, Building better APIs with Play!  Herein lies coding examples galore!
---

This is the technical companion to my Point.io post, [Building better APIs with Play!](http://point.io/article/building-better-apis-play).  Herein lies coding examples galore!

## RESTful Architecture - Routing

The routes file of a Play app allows you to define the HTTP verb, the route path/pattern, and the corresponding method from the controller.  In addition to denoting basic path variables, you can also use regular expressions to match on specific routes (i.e. xml or html formats for example).  What's great about this approach is this file is compiled along with the source code, so any mistakes like an incorrect controller method or invalid HTTP verb will be caught and thrown at compile time.

{% gist 9337208 %}

## Action composition

We define two types of custom actions: atomic and composed.  Atomic actions can be used stand-alone or as building blocks to be composed with other actions.  We use the following pattern for building an atomic action.

{% gist 9345681 %}

The object allows us to use the action by itself, and the case class allows us to compose this action with other actions.

{% gist 9345730 %}

A composed action is strictly syntactic sugar, making it more convenient to combine behaviors and keeping the controller code more concise.  We define composed actions using just an object.

{% gist 9345746 %}

## Filters

[Filters](http://www.playframework.com/documentation/2.2.2/ScalaHttpFilters) are handy for cross-cutting concerns.  We've had one use case where it was necessary to modify every JSON response with links to metadata.  We achieved this using a filter and the [Play Enumeratee library](http://www.playframework.com/documentation/2.2.2/Enumeratees)

{% gist 9345957 %}

## JSON - Global messaging

Building an effective API requires being responsive to users in a comprehensive manner.  All concievable events should be handled appropriately, such as incorrect requests from the client or internal server errors.  Creating a Global object allows you to generically craft responses to handle these situations.  We define methods to handle events like internal errors, route not found, or a bad request.

{% gist 9345819 %}

## Conclusion

Play is well-equipped to handle the nuances of API development and maintenance.  We're pleased with the stability and performance we've seen thus far and are looking forward to continuing down this path of [reactive goodness](http://www.reactivemanifesto.org/).  