var https = require('https');

console.log('I did it!');

var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
var callback = function() {
  console.log('In response handler callback!');
}

console.log("I'm about to make the request!");


console.log("I've made the request!");


// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
  console.log('Response: ', response);
}

https.request(options, callback).end();