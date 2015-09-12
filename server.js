var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render("index")
});

server.listen(3000, function(){
  // where it is located when local hosting to be hashed when/if push to heroku
  console.log("Server listening on port 3000");
});

module.exports = server;