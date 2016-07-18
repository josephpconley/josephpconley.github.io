---
layout: post
type: post
tags: DataCombinator playframework json api scala
title: JSONPath Library for Play
subtitle: Efficient query language for JSON and Play apps
published: true
description: I've been working on a platform that transforms, composes, and serves data.  As part of this effort, I've developed a library for Play that performs a JSONPath query on a Play JsValue. 
---

I've been working on a platform that transforms, composes, and serves data.  As part of this effort, I've developed a [library for Play](https://github.com/josephpconley/play-jsonpath) that performs a JSONPath query on a Play JsValue. You can learn about JSONPath by reading [Stefan Goessner's blog post](http://goessner.net/articles/JsonPath/) on the subject. 

I use [Gatling's jsonpath library](https://github.com/gatling/jsonpath) to parse the JSONPath expression.  I then fold over the tokens, performing a pattern match on each to construct the apporpriate JsValue.  This parser supports all queries except for queries that rely on expressions of the underlying language like `$..book[(@.length-1)]`.  However, there's usually a ready workaround as you can execute the same query using `$..book[-1:]`.

## Example

Here's a scala worksheet which traces the examples on Stefan's post:

<script src="https://gist.github.com/josephpconley/10647739.js"></script>

## Deviation from JSONPath

One conscious choice I made as far as deviating from JSONPath is to always flatten the results of a recursive query.  Using the bookstore example, typically a query of `$..book` will return an array with one element, the array of books.  If there was another book array somewhere in the document, then `$..book` will return an array with two elements, both arrays of books.  However, if you were to query `$..book[2]` for our example, you would get the second book in the first array, which assumes that the `$..book` result has been flattened.  In order to make recursion easier and the code simpler, I always flatten the result of recursive queries regardless of the context.

If you have any questions, comments, or suggestions please let me know.  I hope to be introducing an early iteration of my data platform shortly so stay tuned!