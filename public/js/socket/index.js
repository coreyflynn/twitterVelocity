var previousTweetCount,
    maxVelocity = 0,
    maxAcceleration = 0,
    currentTweetCount = 0,
    paused = false;

if(io !== undefined) {
  socket = io.connect(window.location);

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
