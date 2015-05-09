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
