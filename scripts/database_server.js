var http = require('http');
var fs = require('fs');

var dt = require('./date_return_module');
http.createServer((req,res) => {
  res.writeHead(200, {'Content-Type': 'text/htmlk'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);