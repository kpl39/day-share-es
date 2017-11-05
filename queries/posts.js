// var helpers = require('./queryHelpers');
// var client = require('../connection.js');

// function addParent(req, res, next) {

// 	var parent = req.body;

// 	client.index({
// 	index: 'dayshare',
// 	type: 'parents',
// 	body: {
// 		"parent_id": parent.id,
// 		"location": {
// 			lat: parent.latitude,
// 			lon: parent.longitude
// 		},
// 		"zipcode": parent.zipcode,
// 		// "children": parent.children, 
// 		"children": [
// 			{
// 				age: parent.childAge
// 			}
// 		]
// 		"tags": parent.tags
// 	}
// }, function(err, resp, status) {
// 	console.log("RESPONSE: ", resp);
// });
// }