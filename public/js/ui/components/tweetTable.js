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
