/**
 * Created by sumasoft on 16/07/14.
 */

var http = require('http');
var port = process.env.port || 1337;

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(port);