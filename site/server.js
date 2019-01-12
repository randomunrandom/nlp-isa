const finalhandler = require('finalhandler'),
      serveStatic = require('serve-static'),
      uid = require('gen-uid'),
      http = require('http');

const port = 8888;

const server = http.createServer((request, response) => {
  const req_id = uid.token(true).substr(0, 8);
  console.log(`[${new Date().toJSON().replace("T", " ").replace("Z", "")} - ${req_id}] ${request.method} ${request.url}`);
  const serve = serveStatic("./site/");
  const done = finalhandler(request, response);
  serve(request, response, () => {
    console.log(`[${new Date().toJSON().replace("T", " ").replace("Z", "")} - ${req_id}] ${response.statusCode} ${http.STATUS_CODES[response.statusCode]}`);
    done();
  });
});

server.listen(port,() => {
  console.log(`[${new Date().toJSON().replace("T", " ").replace("Z", "")}] Server is running`);
});
