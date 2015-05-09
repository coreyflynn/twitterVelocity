// build an event dispatcher to coordinate the different pieces of the UI
var events = require('./events');
events.buildDispatcher();

// set up a socket connnection to our twitter stream server
require('./socket');

// build the UI
require('./ui');
