const finalhandler = require('finalhandler'),
      serveStatic = require('serve-static'),
      uid = require('gen-uid'),
      http = require('http');

const port = 8888;

const server = http.createServer((request, response) => {
  const req_id = uid.token(true).substr(0, 8);
  console.log(`[${new Date().toJSON().replace("T", " ").replace("Z", "")} - ${req_id}] ${request.method} ${request.url}`);
  const serve = serveStatic("./site/");
  if (request.url.indexOf('project/') >= 0) {
    console.log('!');
    request.url = request.url.slice(0, request.url.length - request.url.split('/')[request.url.split('/').length - 1].length);
    console.log(request.url);
  }
  else if ((request.url.indexOf('.') < 0) && (request.url !== '/') && (request.url !== '/ru/') && (request.url !== '/en/')) {
    if (request.url.indexOf('?') < 0) {request.url = request.url + ".html";}
    else {request.url = request.url.slice(0, request.url.indexOf('?'))+ ".html" + request.url.slice(request.url.indexOf('?'));}
  }
  // console.log("req = ", request.url);
  // console.log("response = ", response);
  const done = finalhandler(request, response);
  serve(request, response, () => {
    console.log(`[${new Date().toJSON().replace("T", " ").replace("Z", "")} - ${req_id}] ${response.statusCode} ${http.STATUS_CODES[response.statusCode]}`);
    done();
  });
});

server.listen(port,() => {
  console.log(`[${new Date().toJSON().replace("T", " ").replace("Z", "")}] Server is running`);
});
