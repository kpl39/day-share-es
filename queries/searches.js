var helpers = require('./queryHelpers');
var client = require('../connection.js');
var respondWithData = helpers.respondWithData;
var catchError = helpers.catchError;

function searchParents(req, res, next) {
  console.log("PARAMS", req.body);
  var params = req.body;

  var distance = params.distance + params.unit;


  client.search({  
    index: 'geopoints',
    type: 'coords',
    body: {
      query: {
      	bool: {
  			filter: {
  				geo_distance: {
  					distance: distance,
  					location: {
  						lat: params.latitude,
  						lon: params.longitude
  					}
  				}
  			}
  		}
      }, 
      sort: [
      {
        _geo_distance: {
          location: { 
            lat:  params.latitude,
            lon: params.longitude
          },
          order:         "asc",
          unit:          params.unit, 
          distance_type: "plane" 
        }
      }
    ]
    }
  }).then(respondWithData(res, 'parent search'))
    .catch(catchError(next));



  // ,function (error, response,status) {
  //     if (error){
  //       console.log("search error: "+error)
  //     }
  //     else {
  //       console.log("--- Response ---");
  //       console.log(response);
  //       console.log("--- Hits ---");
  //       response.hits.hits.forEach(function(hit){
  //         console.log(hit);
  //       })
  //     }
  // });
};


module.exports = {
  searchParents: searchParents
};