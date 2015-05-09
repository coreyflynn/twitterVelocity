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
