/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below.
 *
 * name: Lake Peterson
 * email: peterlak@oregonstate.edu
 */

var fs = require('fs');
var http = require('http');
var server = http.createServer(requestHandler);

var port = process.env.PORT || 3000;
var htmlFile = fs.readFileSync('./public/index.html');
var cssFile = fs.readFileSync('./public/style.css');
var errorFile = fs.readFileSync('./public/404.html');
var jsFile = fs.readFileSync('./public/index.js');
var bennyIMG = fs.readFileSync('./public/benny.jpg');



function requestHandler(request, response)
{
  console.log("== Received a request");
  console.log("  -- req.url:", request.url);
  console.log("  -- req.method:", request.method);

switch(request.url)
{
  case '/':
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });

    response.write(htmlFile);
	   break;
  case '/index.html':
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });

   	response.write(htmlFile);
    break;
  case '/style.css':
    response.writeHead(200, {
      'Content-Type': 'text/css'
    });

    response.write(cssFile);
    break;
  case '/index.js':
    response.writeHead(200, {
      'Content-Type': 'application/javascript'
    });

    response.write(jsFile);
    break;
  case '/benny.jpg':
    response.writeHead(200, {
      'Content-Type': 'image/jpeg'
    });

    response.write(bennyIMG);
    break;
  default:
    response.writeHead(404, {
      'Content-Type': 'text/html'
    });

    response.write(errorFile);
	  break;
  }

response.end();
}

server.listen(port, function()
{
  console.log("== Server is listening on port ", port);
});
