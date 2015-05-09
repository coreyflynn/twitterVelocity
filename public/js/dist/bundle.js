(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// build an event dispatcher to coordinate the different pieces of the UI
var events = require('./events');
events.buildDispatcher();

// set up a socket connnection to our twitter stream server
require('./socket');

// build the UI
require('./ui');

},{"./events":2,"./socket":3,"./ui":9}],2:[function(require,module,exports){
/**
 * build the top level event dispather
 * @return {null}
 */
function buildDispatcher() {
  window.dispatcher = _.clone(Backbone.Events);
}

module.exports = {
  buildDispatcher: buildDispatcher
}

},{}],3:[function(require,module,exports){
var previousTweetCount,
    maxVelocity = 0,
    maxAcceleration = 0,
    currentTweetCount = 0,
    paused = false;

if(io !== undefined) {
  socket = io.connect('http://localhost:3000');

  // This listens on the "twitter-steam" channel and data is
  // received everytime a new tweet is receieved.
  socket.on('twitter-stream', function (data) {

  });

  // Listens for a success response from the server to
  // say the connection was successful.
  socket.on("connected", function(r) {
    console.log('connected to tweet server');
  });

  socket.on('tweet', function(tweet){
    if (!paused) {
      dispatcher.trigger('newTweet', tweet);
      currentTweetCount += 1;
    }
  });

  // update our tweet counts and dispatch an update every second
  setInterval(function(){
    if (!paused){
      var velocity = currentTweetCount,
          acceleration = currentTweetCount - previousTweetCount;
      maxVelocity = (velocity > maxVelocity) ?
                              velocity : maxVelocity;
      maxAcceleration = (acceleration > maxAcceleration) ?
                              acceleration : maxAcceleration;
      dispatcher.trigger('countUpdate',{
        velocity: velocity,
        acceleration: acceleration,
        maxVelocity: maxVelocity,
        maxAcceleration: maxAcceleration
        });

      previousTweetCount = currentTweetCount;
      currentTweetCount = 0;
      velocity = 0;
    }
  },1000);

  // reset the max values if we filter
  dispatcher.on('filter',function(){
    maxVelocity = 0;
    maxAcceleration = 0;
  });

  dispatcher.on('pause/play', function(){
    if (paused) {
      paused = false;
    } else {
      paused = true;
    }
  });
}

},{}],4:[function(require,module,exports){
/**
 * attach counters to the DOM
 * @return {null}
 */
function attach() {
  var velocityCounterModel = new Barista.Models.GenericCountModel();
  var velocityCounter = new Barista.Views.GenericCountView({
    el:'#counters',
    model: velocityCounterModel,
    span_class: 'col-sm-3 col-xs-6',
    label: 'Tweet Velocity',
    png: false
    });

  var maxVelocityCounterModel = new Barista.Models.GenericCountModel();
  var maxVelocityCounter = new Barista.Views.GenericCountView({
    el:'#counters',
    model: maxVelocityCounterModel,
    span_class: 'col-xs-3 hidden-xs',
    label: 'Maximum Velocity',
    png: false
    });

  var accelerationCounterModel = new Barista.Models.GenericCountModel();
  var accelerationCounter = new Barista.Views.GenericCountView({
    el:'#counters',
    model: accelerationCounterModel,
    span_class: 'col-sm-3 col-xs-6',
    label: 'Tweet Acceleration',
    png: false
    });

  var maxAccelerationCounterModel = new Barista.Models.GenericCountModel();
  var maxAccelerationCounter = new Barista.Views.GenericCountView({
    el:'#counters',
    model: maxAccelerationCounterModel,
    span_class: 'col-xs-3 hidden-xs',
    label: 'Maximum Acceleration',
    png: false
    });

  // listen for update events and update the counters when they come in
  dispatcher.on('countUpdate',function(update){
    velocityCounter.model.set({'count': update.velocity});
    accelerationCounter.model.set({'count': update.acceleration});
    maxVelocityCounter.model.set({'count': update.maxVelocity});
    maxAccelerationCounter.model.set({'count': update.maxAcceleration});
  });

  // reset the max counters if we filter
  dispatcher.on('filter',function(){
    maxVelocityCounterModel.set({'count': 0});
    maxAccelerationCounterModel.set({'count': 0});
  });
}

module.exports = {
  attach: attach
}

},{}],5:[function(require,module,exports){
/**
 * attach pause/play logic to the pause element in the DOM
 * @return {null}
 */
function attach() {
  $('#pause').click(function(){
    dispatcher.trigger('pause/play');

    // if we are paused, transition to play and vice verse
    if ($('.pause-1').length){
      $('.pause-1').removeClass('pause-1').addClass('play-1');
      $('.pause-2').removeClass('pause-2').addClass('play-2');
      $('.pause-3').removeClass('pause-3').addClass('play-3');
    } else {
      $('.play-1').removeClass('play-1').addClass('pause-1');
      $('.play-2').removeClass('play-2').addClass('pause-2');
      $('.play-3').removeClass('play-3').addClass('pause-3');
    }
  });
}

module.exports = {
  attach: attach
}

},{}],6:[function(require,module,exports){
function attach() {
  // set up a scatter plot model
  scatterModel = new Barista.Models.ScatterPlotModel({
    title: 'Tweet velocity over time',
    x_axis_title: 'seconds',
    y_axis_title: 'velocity'
  });

  // set up the scatter plot view
  scatter = new Barista.Views.ScatterPlotView({
    el: $("#scatter"),
    model: scatterModel,
		span_class: "col-xs-12",
    plot_height: 250,
    png: false
  });


  // listen for update events and update the plot when they come in
  var updateCount = 0;
  dispatcher.on('countUpdate',function(update){
    updateCount += 1;
    // update the data
    newXData = scatter.model.get('x_data');
    newXData.push(updateCount);
    newYData = scatter.model.get('y_data');
    newYData.push(update.velocity);

    // if the data is holding more than three minutes of tweets, start rolling
    // the time window
    if (newXData.length >= 180) {
      newXData.shift();
      newYData.shift();
    }

    // update the scatter model
    scatter.model.set({
      x_data: newXData,
      y_data: newYData
    });
    scatter.update();
  });

  // reset the data in the plot if we filter
  dispatcher.on('filter',function(){
    scatter.model.set({
      x_data: [],
      y_data: []
    });

    updateCount = 0;
  });
}


module.exports = {
  attach: attach
}

},{}],7:[function(require,module,exports){
/**
 * attach a search handler to input at the top of the app
 * @return {null}
 */
function attach() {
  $("#search").bind('input propertychange change', _.throttle(change_callback,250));
}

/**
 * updates the current filter used on the twitter stream. The new filter is
 * passed over our socket to update the stream coming from the server
 * @return {null}
 */
function change_callback() {
  var val  = $("#search").val();
  socket.emit('filter',val);
  dispatcher.trigger('filter',val);
}

module.exports = {
  attach: attach
}

},{}],8:[function(require,module,exports){
/**
 * attach a new tableCloth table to the DOM
 * @return {null}
 */
function attach() {
  // instantiate a tableCloth table
  var targetHeight = $(window).height() - $('#tweetTable').offset().top - 50;
  var tc = new tableCloth('tweetTable',{height: targetHeight});


  // add a custom click handler to the basicCell prototype
  basicCell = tc.cellFactory.basicCell;
  basicCell.prototype.click = function() {
    window.location.href = 'https://twitter.com/statuses/' +
                              this.options.tweet.id_str;
  }

  // put new cells in that table as tweets come in
  dispatcher.on('newTweet',function(tweet){
    tc.cellManager.addCellAtIndex(
      new tc.cellFactory.basicCell({
        label: tweet.text,
        tweet: tweet
      }),0);
  });

  // clear tweets if we filter
  dispatcher.on('filter',function(){
    tc.cellManager.cells = [];
    tc.cellManager.renderCells();
  });
}

module.exports = {
  attach: attach
}

},{}],9:[function(require,module,exports){
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

},{"./components/counters":4,"./components/pause":5,"./components/scatter":6,"./components/search":7,"./components/tweetTable":8}]},{},[1]);

//# sourceMappingURL=bundle.js.map