  var respondWithData = function(res, message) {
    return function(data) {
      console.log('DATA', data);
      res.status(200)
      .jsonp({
        status: 'success',
        data: data,
        message: message
      });
    }
  };

  var postData = function(res, message) {
    return function() {
      console.log("POSTING DATA");
      res.status(200)
        .jsonp({
          status: 'success',
          message: message
        });
    }
  };


  var catchError = function(next) {
    return function(err){
      console.log(err);
      return next(err);
    };
  };

  module.exports = {
  respondWithData: respondWithData,
  postData: postData,
  catchError: catchError
};