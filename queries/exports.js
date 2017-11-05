var _ = require('lodash');

var posts = require('./posts');
var searches = require('./searches');


module.exports = _.assign({},
	posts,
	searches
);