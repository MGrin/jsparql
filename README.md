# jsparql
Sparql client for node.js

Uses HHTP GET request since the POST one did not work well in my projects (probably I just forgot to set the graph name, and so the results were wrong...)

# Usage

#### Define graph on client creation:
```javascript
var sparql = require('jsparql');

var client = new sparql('http://dbpedia.org/sparql', 'http://dbpedia.org');

client.query('select distinct ?Concept where {[] a ?Concept} LIMIT 100', function (err, results) {
  if (err) throw err;
  console.log(JSON.stringify(results));
});
```

#### Define graph on each query:
```javascript
var sparql = require('jsparql');

var client = new sparql('http://dbpedia.org/sparql');

client.query({
  graph:'http://dbpedia.org',
  query: 'select distinct ?Concept where {[] a ?Concept} LIMIT 100'
}, function (err, results) {
  if (err) throw err;
  console.log(JSON.stringify(results));
});
```
