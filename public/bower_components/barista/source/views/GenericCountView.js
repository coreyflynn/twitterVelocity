/**
 * a view that supports a single label and a single count *
 */

Barista.Views.GenericCountView = Barista.Views.BaristaBaseView.extend({
  /**
   * give the view a name to be used throughout the View's functions when
   * it needs to know what its class name is
   * @type {String}
   */
  name: "GenericCountView",

  /**
   * set up the view's default model
   * @type {Barista.Models.GenericCoutModel}
   */
  model: new Barista.Models.PertCountModel(),

  /**
   * overide the default Backbone.View initialize method to handle
   * optional arguments, compile the view template, bind model changes
   * to view updates and render the view
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  initialize: function(){
    // set up label, default if not specified
    this.label = (this.options.label !== undefined) ? this.options.label : 'Signatures';

    // set the animation duration for count.
    this.duration = (this.options.duration != undefined) ? this.options.duration : 500;

    // set up the top bar color, default to gray if not specified
    this.top_bar_color = (this.options.top_bar_color !== undefined) ? this.options.top_bar_color : 'white';

    // call the the base view initialize function
    this.base_initialize();

    // bind window resize events to redraw.
    var self = this;
    $(window).resize(function() {self.update();} );

    return this;
  },

  /**
   * completely re-render the view
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  render: function() {
    this.base_render()
      .renderTopBar()
      .renderLabel()
      .renderCount();

    return this;
  },

  /**
   * update only the dynamic portions of the view
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  update: function() {
    this.updateCount();
  },

  /**
   * draw the top bar of the view
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  renderTopBar: function() {
    this.fg_layer.selectAll('.genericCountViewTopBar').data([]).exit().remove();
    this.fg_layer.selectAll('.genericCountViewTopBar').data([1])
    .enter().append("rect")
    .attr("class","genericCountViewTopBar")
    .attr("height",'2px')
    .attr("width",this.width)
    .attr("fill",this.top_bar_color);

    return this;
  },

  /**
   * draw the static label at the top of the view
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  renderLabel: function() {
    this.fg_layer.selectAll('.genericCountViewLabel').data([]).exit().remove();
    this.fg_layer.selectAll('.genericCountViewLabel').data([1])
      .enter().append("text")
      .attr("class","genericCountViewLabel")
      .attr("y",25)
      .attr("font-family","'Open Sans")
      .attr("font-weight","300")
      .attr("font-size","16px")
      .attr("fill",'#444444')
      .text(this.label);

    return this;
  },

  /**
   * draw the count from scratch
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  renderCount: function() {
    // get the count from the model. If it is undefined, assume it is 0
    var count = this.model.get('count');
    if (typeof(count) !== 'number'){
      count = 0;
    }

    // draw the count
    this.fg_layer.selectAll('.genericCountViewCount').data([]).exit().remove();
    this.fg_layer.selectAll('.genericCountViewCount').data([1])
      .enter().append("text")
      .attr("class","genericCountViewCount")
      .attr("y",60)
      .attr("font-family","'Open Sans")
      .attr("font-weight","500")
      .attr("font-size","37px")
      .attr("fill",this.fg_color)
      .text(Barista.numberWithCommas(count));

    return this;
  },

  /**
   * update the count from the model. If if is undefined, assume it is 0
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  updateCount: function() {
    // get the count from the model. If it is undefined, assume it is 0
    var count = this.model.get('count');
    if (typeof(count) !== 'number'){
      count = 0;
    }


    // transition the count to the new value
    this.fg_layer.selectAll('.genericCountViewCount').data([1])
      .transition().duration(this.duration)
      .tween("text", function() {
          var i = d3.interpolate(this.textContent.replace(",",""), count);
          return function(t) {
            this.textContent = Barista.numberWithCommas(Math.round(i(t)));
          };
      });

    return this;
  }

});
