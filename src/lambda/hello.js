exports.handler = function(event, context, callback) {
  console.log('test');
  console.log(context);
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: 'test',
      "headers": {
      "X-Test-Header": "baking experiment",
      "Set-Cookie": "cookie1=chocolate-chip",
      "Set-Cookie": "cookie2=oatmeal"
    }
  });
};
