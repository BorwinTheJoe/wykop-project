var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var dt = require('./date_return_module');

app.use(bodyParser.urlencoded({ extended: true}));

app.post("/database_server", (req, res) => {
  res.send(`Title is: ${req.body.title}`);
  res.end();
});

app.listen(8080, () => {
  console.log(`server running on port 8080`);
})

/*http.createServer((req,res) => {
  res.writeHead(200, {'Content-Type': 'text/htmlk'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);*/