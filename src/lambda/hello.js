exports.handler = function(event, context, callback) {
  console.log('test');
  console.log(context);
  callback(null, {
    statusCode: 200,
    body: 'test'
  });
};
