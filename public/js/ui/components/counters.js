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
