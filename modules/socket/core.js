var io = require('socket.io');
var client = require('../twitter/client');

// set up our stream object to be null. We do this here in a global module
// scope so we can manipulate it in all socket connections
var stream = null;

/**
 * sets up socket io to listen on the same port as the given server and log
 * the connection to standard out
 * @param {http server} server the server to listen on
 */
function listen(server) {
  var streamParams = {
    locations:'-180,-90,180,90',
    language: 'en'
    }
  client.stream('statuses/filter', streamParams, function(stream) {
    ioListener = io.listen(server);
    ioListener.sockets.on('connection', function (socket) {
      socket.emit("connected");

      // default our text filter to
      socket.filter = '';

      stream.on('data', function(tweet) {
        var re = foo = new RegExp(socket.filter,'i');
        if (re.test(tweet.text)) {
          socket.emit('tweet', tweet);
        }
      });

      stream.on('error', function(error) {
        throw error;
      });

      socket.on('filter', function(clientFilter){
        socket.filter = clientFilter;
      });
    });
  });
}
module.exports = {
  listen: listen
}
