---
layout: post
type: post
tags: api swagger postman integration
title: Swagger2Postman
subtitle: A library to convert Swagger docs to Postman collections
published: true
---

<table class="image">
  <tr>
    <td><img src="/assets/swagger.png" alt="Swagger Logo"/></td>
    <td><img src="/assets/postman.jpg" alt="Postman Logo"/></td>
  </tr>
</table>

I've recently been working on a Swagger-documented API where it's been necessary to test the API endpoints in different environments.
While [Swagger UI](https://github.com/swagger-api/swagger-ui) is a simple, powerful tool for testing APIs, it doesn't streamline well across multiple environments, nor does the UI allow for testing certain edge cases (i.e. what response will I get if I omit a required parameter?).  However, [Postman](https://www.getpostman.com/) is very well-suited for
both of these use cases, and so I've built a library called **Swagger2Postman** to convert Swagger docs into a Postman JSON collection.

**Code** - [https://github.com/josephpconley/swagger2postman](https://github.com/josephpconley/swagger2postman)

**Live Demo** - [http://app.josephpconley.com/swagger2postman](http://app.josephpconley.com/swagger2postman)

It only works with the [Swagger 1.2 specification](https://github.com/swagger-api/swagger-spec/blob/master/versions/1.2.md) as of now so if you have any feedback or want to see it work for Swagger 2.0, let me know in the comments section here or on the project's [issues page](https://github.com/josephpconley/swagger2postman/issues).  Thanks!
