---
layout: post
type: post
tags: DataCombinator api json xml csv opendata
title: Query JSON/XML/CSV using SQL
subtitle: ...and other useful data transformations
published: true
---

Ever wish you could use your favorite query language across different data formats?  Or get query results in several formats (XML, JSON, and CSV/XLS)?  Then check out [DataCombinator's new query engine](http://www.datacombinator.com/query).

## Data sources
You can copy and paste structured data manually, point to a URL, or connect to a database directly (H2, MongoDB, MySQL, or PostgreSQL).  The engine hasn't been optimized yet to handle large documents or tables so please be mindful.

## Query languages
The engine supports JSONPath (powered by [my open-source Play library](http://www.josephpconley.com/2014/04/15/jsonpath-for-play.html)), XPath and SQL.  You can use any of these languages to query data in any of the JSON, XML or CSV formats.  Since JSONPath and XPath are fairly similar and straightforward, the more interesting use cases tend to involve SQL.

### SQL
The FROM CLAUSE isn't necessary as the query only applies to one "table", that is, the data being queried.  For SQL to work against JSON, the JSON must be an array of objects, e.g.

```json
[
   {
      "id":1,
      "name":"Joe"
   },
   {
      "id":2,
      "name":"Janine"
   }
]
```

If the objects in the array have nested levels, each object will be flattened, and the keys concatenated with an "_", e.g.

```json
[
    {
        "id": 1, 
        "name": "Joe", 
        "address" : { 
            "street" : "123 Main St.", 
            "city": "Springfield", 
            "state": "PA"
        }
    }
]
```

would be flattened to

```json
[
   {
      "id":1,
      "name":"Joe",
      "address_street":"123 Main St.",
      "address_city":"Springfield",
      "address_state":"PA"
   }
]
```

Similarly, an XML must be in a "table format" in order to handle a SQL query, e.g.

```xml
	<table class="ui table">
		<row>
			<id>1</id>
			<name>Joe</name>
		</row>
		<row>
			<id>2</id>
			<name>Janine</name>
		</row>
	</table>
```

### Supported SQL functions
The engine supports basic single-table query functionality (no self joins yet) with simple clauses (WHERE, GROUP BY, and ORDER BY) and a few basic aggregation functions (COUNT, MIN, MAX, SUM).  I'll be working to expand upon this, so if you have any requests [let me know](http://www.datacombinator.com/contact).

## Query results
The query engine outputs results in JSON, XML, and CSV/HTML Table/Excel if the resulting structure can be converted to a table structure.

## Examples

Here's a few examples where I've found the query engine helpful.

### ESPN APIs - JSON

ESPN has released a [variety of APIs](http://developer.espn.com/docs) that allow developers to access headlines and basic team statistics.  You'll need to create a free account and register for a key, at which point you'll have immediate access to the Public APIs.

So for example, if I wanted to find out stats on my beloved Philadelphia Phillies, I would enter http://api.espn.com/v1/sports/baseball/mlb/teams?apikey=MY_API_KEY as the URL in DataCombinator.  Using the JSON Raw tab, I can see the pretty printed response, and quickly search on Phillies to find their id of 22.  Using this id, I can get the latest news on the Phightins by using the URL of http://api.espn.com/v1/sports/baseball/mlb/teams/22/news?apikey=MY_API_KEY.  I can then use JSONPath to only include the part of the response I want.  For example, if I just want all the latest headlines associated with the Phillies, I take a quick look at the structure and apply the `$..headline` JSONPath query to return an array of headlines:

```js
[
    "Mets end 5-game skid, rally past Phils 5-4 in 11",
    "Howard, Rollins lead Phillies past slumping Mets",
    "Byrd's double lifts Phillies over Mets 3-2 in 11",
    "The base: Approach at your own risk",
    "Phillies fall to hot-hitting Blue Jays in 20,000th game",
    "Adam Lind activated by Blue Jays",
    "Mark Buehrle posts MLB-best sixth win as Blue Jays rock Phillies",
    "Blue Jays edge Phillies on sac fly in 10th after blowing 5-run lead",
    "Happ stifles Phillies, Blue Jays win 3-0",
    "Hernandez outduels Gonzalez, Phillies edge Nats"
]
```	

### Weather Data - XML

OpenWeatherMap.org provides a [free weather API](http://openweathermap.org/API) which returns data in XML format.  For example, if I wanted to get the current weather in my hometown of Springfield, PA, I could use the URL

	http://api.openweathermap.org/data/2.5/weather?q=Springfield&mode=xml&units=imperial

to get an XML document back.  I could then query the document using XPath to get just the temperature via `//temperature`.

	<temperature max="71.52" min="71.52" unit="fahrenheit" value="71.52"/>

### OpenData - CSV

Public institutions are starting to embrace open data practices, enabling civic-minded hackers to build useful applications that provide a public service.  In this spirit, the city of Philadelphia has made [various data sets](https://github.com/CityOfPhiladelphia) available for public consumption.  Most of these data sets are in CSV format.  We'll take one such data set, [phl-site-stats](https://github.com/CityOfPhiladelphia/phl-site-stats), and use the Raw url from Github to query it (I picked this dataset as it's relatively small).

We'll take a look at the latest month's stats found at [https://raw.githubusercontent.com/CityOfPhiladelphia/phl-site-stats/master/SiteStats0514.csv](https://raw.githubusercontent.com/CityOfPhiladelphia/phl-site-stats/master/SiteStats0514.csv).  Without entering a query, we would get the entire data set in the results.  One point to note is that the query engine will try to convert strings to numbers, making it easy to query based on certain conditions.  If we wanted to view the most popular sites for phila.gov, we would simply enter a query of

```sql
select * order by page_count desc
```

Or we could get the total number of unique hits for the month of May

```sql
select sum(unique_page_count)
```

## Next steps
This query engine will be the foundation of DataCombinator's platform of data collection and composition tools.  Our next step is to not only host structured data via API endpoints, but to also combine multiple datasources into one document (which in turn would be hosted as well!).  If you're interested in learning more, [sign up](http://www.datacombinator.com) for e-mail updates or [follow us on Twitter @DataCombinator](https://www.twitter.com/DataCombinator).
