---
layout: post
type: post
tags: [aws, serverless]
title: Stupid AWS Tricks - Simple Invoicing
thumbnail-img: /assets/create_invoice.svg
published: true
---

Like all purely rational engineers with 4 kids and no spare time, I prefer to write my own utilities to automate recurring
mundane tasks rather than pay a pittance to have a third party do it for me and make my life an order of magnitude easier.
Lucky for me, AWS has a really expansive Free Tier!  So yes, I rolled a [simple monthly invoicing solution](https://github.com/josephpconley/create-invoice) using [Serverless](https://serverless.com)
using a handful of simple AWS services (see the [README](https://github.com/josephpconley/create-invoice#readme) for more technical guidance and instructions on how to use in your own AWS account)

![serverless](/assets/create_invoice.svg)

Takeaways:

## Serverless is good for small, isolated projects, not ideal for the enterprise

I found that for a focused use-case that really just needs a Lambda and a bit of storage, Serverless is pretty solid.
It uses declarations in the base YAML file to generate CloudFormation stacks to manage your resources.
Conflicts are inevitable with any IaC solution (I still have nightmares sifting through Terraform state files)
but most issues here are fairly easy to resolve.  Attempting to wire in existing resources led to issues (either of the framework or my own ignorance)
but were significant enough that I typically only included what was strictly necessary in the YAML file.

So for me, if I'm building a larger foundation for an enterprise-level project I'd work either directly with Cloudformation or Terraform if I had concerns about going cloud-agnostic.

## Lambda Layers are Legit

I spent half my time on this project trying to translate my working local wkhtmltopdf Python script to a working Lambda.
Generally,  any time you need an OS-level dependency in a Lambda environment, use a Lambda Layer.
Otherwise you end up packaging too much stuff in your Lambda, you get file-level permission issues, it just gets ugly fast.
Here's a nice overview of [best practices](https://www.ranthebuilder.cloud/post/aws-lambda-layers-best-practices?ck_subscriber_id=1867411043)
when working with Layers.

## The sheer volume of AWS services is a blessing and a curse

There's a lot of a ways to sovle problems using AWS.  Too many.  And based on the [recent re:Invent announcements](https://aws.amazon.com/blogs/aws/top-announcements-of-aws-reinvent-2022/)
, these services are continuing to grow and talk to each other.  This can all get very confusing very fast to cloud newcomers, which is why I still prefer DigitalOcean for simpler applications that don't need planet-scale, and manage them using Terraform to enable multi-cloud when necessary (i.e. to handle testing workloads and other capabilities). 
