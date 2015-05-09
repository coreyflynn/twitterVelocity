var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    socketCore = require('./modules/socket/core');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use('/public', express.static(__dirname + '/public'));
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/barista_config.json',function(req,res){
    res.json({"user_key":"I have no key"});
})
app.get('/', routes.index);

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// tell socket.io to listen for connections on the same port as Express.
// and set up our stream object to be null
socketCore.listen(server);
