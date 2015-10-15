var sparql = require('../index.js');

var client = new sparql('http://dbpedia.org/sparql', 'http://dbpedia.org');

client.query('select distinct ?Concept where {[] a ?Concept} LIMIT 100', function (err, results) {
  if (err) throw err;
  console.log('Queried vars: ' + results.head.vars.join(', '));
  console.log('Queried bindings length: ' + results.results.bindings.length);
});

client = new sparql('http://dbpedia.org/sparql');

client.query({
  graph:'http://dbpedia.org',
  query: 'select distinct ?Concept where {[] a ?Concept} LIMIT 100'
}, function (err, results) {
  if (err) throw err;
  console.log('Queried vars: ' + results.head.vars.join(', '));
  console.log('Queried bindings length: ' + results.results.bindings.length);
});
