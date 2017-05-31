---
layout: post
type: post
tags: [comcast, chariot, scala, spark, cassandra]
title: Real World Spark Lessons  
subtitle: Digging knowledge out of the dirt 
published: true
---

I've enjoyed learning the ins and outs of [Spark](https://spark.apache.org/) at my current client.  I've got a nice base SBT project going where I 
use Scala to write the Spark job, [Typesafe Config](https://github.com/typesafehub/config) to handle configuration, 
[sbt-assembly](https://github.com/sbt/sbt-assembly) to build out my artifacts, 
and [sbt-release](https://github.com/sbt/sbt-release) to cut releases.  Using this as my foundation, I recently built a Spark job that runs every morning
to collect the previous day's data from a few different datasources, join some reference data, perform a few aggregations 
and write all of the results to Cassandra.  All in roughly three minutes (not too shabby).  

Here's some initial lessons learned:

- Be mindful of when to use `cache()`.  It sets a checkpoint for your DAG so you don't need to re-compute the same instructions.
I ended up using this before performing my multiple aggregations.
- [Apache Avro](https://avro.apache.org/) is really really good at data serialization.  Should be the default choice for large-scale data writing into HDFS.
- When using `pivot(column, range)`, it REALLY helps if you can enumerate the entire range of the pivot column values.  My job time was cut in half
  as a result of passing all possible values.  More here on [the Databricks blog](https://databricks.com/blog/2016/02/09/reshaping-data-with-pivot-in-apache-spark.html)
- Cassandra does upserting by default, so I didn't even need to worry about primary key constraints if data needs to be re-run (idempotency is badass).

Recently, I was asked to update my job to run every 15 minutes to grab the latest 15 minutes of data (people always want more of a good thing).
So I somewhat mindlessly updated my cronjob and didn't re-tune any of the configuration parameters (spoiler alert: bad idea).
Everything looked good locally and on our test cluster, but when it came time for production, WHAM!  My job was now taking 5-7 minutes
when running on a fraction of the data for the daily runs.  Panic time!

<img src="/assets/fry-panic.jpg" alt="Philip J. Fry Panicking"/><br>

After wading through my own logs and some cryptic YARN stacktraces, it dawned on me to check my configuration properties.  
One thing in particular jumped out at me:

```
spark.sql.shuffle.partitions = 2048
```

I had been advised to set this value when running my job in production.  And it worked well for my daily job (cutting down on processing time by 30s).
However, now that I was working with data in a 15-minute time window, this was WAY too many partitions.  The additional runtime
resulted from the overhead of using so many partitions for so little data (my own theory, correct me if I'm wrong).  So 
I disabled this property (defaulting to 200) and my job started running in ~2 minutes, much better!

<img src="/assets/futurama-happy.jpg" alt="Futurama gang happy"/><br>

More lessons learned:

- ALWAYS test your Spark job on a production-like cluster as soon as you make any changes.  Running your job locally
  vs. running your job on a YARN/Mesos cluster is about as similar as running them on Earth vs. Mars, give or take. 
- You REALLY should know the memory/cpu stats of your cluster to help inform your configuration choices.
You should also be mindful of what other jobs run on the cluster and when.
- Develop at least a basic ability to [read and understand the Spark UI](https://databricks.com/blog/2015/06/22/understanding-your-spark-application-through-visualization.html).  
It's got a lot of useful info, and with event logging you can see the improvements of your incremental changes in real-time.

Let me give another shout-out to Typesafe Config again for making my life easier.  I have three different ways (env variables, properties file, command line args)
to pass configuration to my Spark job and I was able to quickly tune parameters using all of these options.  Interfaces are just 
as important to developers as they are to end users!

All in all this was a fun learning experience.  I try to keep up on different blogs about Spark but you really don't get a good feel for
it until you're actually working on a problem with production-scale infrastructure and data.  I think this is a good lesson
for any knowledge work.  You need to [do the work](https://www.farnamstreetblog.com/2013/04/the-work-required-to-have-an-opinion/)
to acquire knowledge.  This involves not just reading but challenging assumptions, proving out ideas, and
[digging knowledge out of the dirt](http://www.nytimes.com/1997/07/27/sports/hogan-constant-focus-on-perfection.html?src=pm).
Active engagement using quick feedback loops will lead to much deeper and usable knowledge, and that'll make you, as Mick would say,
"a very dangerous person!"

Party on!

<img src="https://media.giphy.com/media/vMnuZGHJfFSTe/giphy.gif" alt="Wayne Zang"/><br>
