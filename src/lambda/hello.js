exports.handler = function(event, context, callback) {
  console.log('test');
  console.log(context);
  console.log(event);
  var ref = event.headers.referer || false;
  if( ! false ){
  callback(null, {
    statusCode: 302,
    headers: {
      Location: 'https://google.com'
    }
  });
  }
  callback(null, {
    statusCode: 200,
    body: 'testare',
      "headers": {
      "Set-Cookie": "cookie2=" + ref
    }
  });
};
