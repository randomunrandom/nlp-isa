const finalhandler = require('finalhandler'),
      serveStatic = require('serve-static'),
      uid = require('gen-uid'),
      http = require('http');

const port = 8088;

const server = http.createServer((request, response) => {
  const req_id = uid.token(true).substr(0, 8);
  console.log(`[${new Date().toJSON().replace("T", " ").replace("Z", "")} - ${req_id}] ${request.method} ${request.url}`);
  const serve = serveStatic("./site/");
  if (request.url.indexOf('project/') >= 0) {
    console.log('detected link to project/*');
    let tmp_url = request.url.split('/');
    tmp_url.pop();
    request.url = tmp_url.join('/') + '/';
    console.log('\tredirecting to ', request.url);
  }
  else if (request.url.indexOf('demo/') >= 0) {
    console.log('detected link to demo/*');
    let tmp_url = request.url.split('/');
    tmp_url.pop();
    request.url = tmp_url.join('/') + '/';
    console.log('\tredirecting to ', request.url);
  }
  else if (request.url.indexOf('dataset/') >= 0) {
    console.log('detected link to dataset/*');
    let tmp_url = request.url.split('/');
    tmp_url.pop();
    request.url = tmp_url.join('/') + '/';
    console.log('\tredirecting to ', request.url);
  }
  else if (request.url.indexOf('person/') >= 0) {
    console.log('detected link to person/*');
    let tmp_url = request.url.split('/');
    tmp_url.pop();
    request.url = tmp_url.join('/') + '/';
    console.log('\tredirecting to ', request.url);
  }
  else if (request.url.indexOf('publication/') >= 0) {
    console.log('detected link to publication/*');
    let tmp_url = request.url.split('/');
    tmp_url.pop();
    request.url = tmp_url.join('/') + '/';
    console.log('\tredirecting to ', request.url);
  }
  else if ((request.url.indexOf('.') < 0) && (request.url !== '/') && (request.url !== '/ru/') && (request.url !== '/en/')) {
    console.log('detected link to file without extension');
    if (request.url.indexOf('?') < 0) {request.url = request.url + ".html";}
    else {request.url = request.url.slice(0, request.url.indexOf('?')) + ".html" + request.url.slice(request.url.indexOf('?'));}
    console.log('\tredirecting to ', request.url);
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
