var express =  require('express');
var app = express();
var server = require('http').Server(app);
var path = require("path");
var io = require('socket.io')(server);
var socket = require('./src/server/socket.js');

var host = 'localhost';
var port = 3000;


app.use('/',  express.static(__dirname + '/public'));
app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

socket(io);

server.listen(port, host, function() {
    console.log('Listening on port %d %s', server.address().port, host);
});