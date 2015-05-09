var counters = require('./components/counters');
var tweetTable = require('./components/tweetTable');
var search = require('./components/search');
var scatter = require('./components/scatter');
var pause = require('./components/pause');

counters.attach();
search.attach();
scatter.attach();
tweetTable.attach();
pause.attach();
