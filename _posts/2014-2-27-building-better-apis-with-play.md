---
layout: post
type: post
tags: playframework pointio scala
title: Building better APIs with Play!
published: true
---

At Point.io, we spend a lot of time building APIs to power our enterprise solutions.  We've invested a lot of time and energy choosing a suitable framework for serving these APIs, and we've concluded that the [Play Framework](http://www.playframework.com) (particularly for Scala) affords us the performance, scalability, and development ease-of-use to meet our needs.

## RESTful Architecture

We believe it's important to build our APIs in a RESTful manner.  Play is inherently stateless, not storing any information on the server.  This not only conforms to RESTful principles but facilitates vertical scaling (several instances of Play on one server) and horizontal scaling (several servers running Play).  Play also leverages a cache to allow clients to cache responses.  This includes not just resources but entire complex server-side actions.  Furthermore, building routes for RESTful resources in Play is very straightforward, and also has the added benefit of static compilation, ensuring that invalid routes will be caught at compile time.

## Authentication and Security

While there's no out-of-the-box solution for authentication in Play, there is sufficient documentation regarding [Action composition](http://www.playframework.com/documentation/2.2.x/ScalaActionsComposition), which highlights a very basic authentication example.  Through action composition, we can assign specific behaviors to specific actions.  For example, we've built additional actions to handle authorization (is this authenticated user authorized to access this resource) and performance monitoring (how long did this action take).  In addition to these lower-level concerns, Play offers [Filters](http://www.playframework.com/documentation/2.2.x/ScalaHttpFilters) to handle customization of cross-cutting concerns like content encoding and logging.

## JSON Reads/Writes

JSON is arguably the most popular data-interchange format for APIs and back-end services.  Play Scala offers an [excellent library](http://www.playframework.com/documentation/2.2.x/ScalaJson) for reading and writing JSON.  It offers great functionality for both lower-level operations as well as mapping and validating complex JSON structures.  It also leverages [Scala Macros](http://www.playframework.com/documentation/2.2.x/ScalaJsonInception) to allow for concise reading/writing with Scala case classes.

## Conclusion

We've been able to build powerful, scalable APIs with minimal cost using the Play Framework.  We're pleased with the outcomes thus far and are looking forward to leveraging more of the [Typesafe](http://typesafe.com/) stack to enhance our technology offerings. 