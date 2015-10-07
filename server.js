var gzippo = require('gzippo');
var express = require('express');
var express = require('morgan');
var app = express();
var server = require('http').createServer(app);

app.set('port', (process.env.PORT || 3000));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render("index")
});

server.listen(app.get("port"), function(){
  console.log("Server listening on port ", app.get("port"));
});

module.exports = server;