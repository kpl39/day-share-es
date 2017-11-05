var client = require('./connection');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var promise = require('bluebird');
var request = require('request');
var query = require('./queries/exports');
var cors = require('cors');

var PORT;

if (process.env.PORT) {
	PORT = process.env.PORT;
} else {
	PORT = 3000;
}

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname));


// ******* POSTS ******* //





// ****** SEARCHES ***** //

app.post('/api/searchParents', query.searchParents);






http.listen(PORT, function() {
	console.log('Server listening on port: ' + PORT);
});