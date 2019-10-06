var fetchMock = require('fetch-mock');
var makeRequest = require('./make-request');

// Mock the fetch() global to always return the same value for GET
// requests to all URLs.
fetchMock.get('*', { hello: 'world' });

makeRequest().then(function(data) {
  console.log('got data', data);
});

// Unmock.
fetchMock.reset();