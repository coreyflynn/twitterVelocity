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
