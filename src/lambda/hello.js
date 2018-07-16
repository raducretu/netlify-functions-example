exports.handler = function(event, context, callback) {
  console.log('test');
  console.log(context);
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: 'test'
  });
};
