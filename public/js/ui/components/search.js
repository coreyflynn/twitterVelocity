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
