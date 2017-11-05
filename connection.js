var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  // host: 'https://elastic:iYkxYXOzCQIxBfjAeY6Bnvfv@1cd7e36e4a02d97d8e3d6d65d1e6f19f.us-east-1.aws.found.io:9243',
  host:  '18.216.20.163',
  log: 'trace'
});

module.exports = client;