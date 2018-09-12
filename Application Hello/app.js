var http = require('http');
var fs = require('fs');
var parser = require('./paramsParser.js');
var parse = parser.parse;

http.createServer(function (req, res) {
fs.readFile('./index.html', function(err, html) {
  var htmlString = html.toString();
  var variablesHTML = htmlString.match(/[^\{\}]+(?=\})/g);
  var params = parse(req);
  for(var i = variablesHTML.length-1; i >= 0; i--) {
    htmlString = htmlString.replace("{"+variablesHTML[i]+"}",params[variablesHTML[i]]);
  };
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(htmlString);
  res.end();
  });
}).listen(8080);

