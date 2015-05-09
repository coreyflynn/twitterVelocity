/**
 * A view the displays both sequence structure and modifications
 */

Barista.Views.SequenceView = Barista.Views.BaristaBaseView.extend({
  /**
   * give the view a name to be used throughout the View's functions when it needs to know what its class
   * name is
   * @type {String}
   */
  name: "SequenceView",

  /**
   * the default model for the view
   * @type {backbone.Model}
   */
  model: new Barista.Models.SequenceModel(),

  /**
   * Overide the default Backbone.View initialize method to handle optional arguments, compile the view
   * template, bind model changes to view updates, and render the view
   */
  initialize: function(){
    // set up modification colors
    this.modificationColors = (this.options.modificationColors !== undefined) ? this.options.modificationColors : undefined;
    if (this.modificationColors === undefined) {
      this.modificationColors = {
        'ac': '#ff9933',
        'ox': '#00ccff'
      }
    }

    //set up default sequenceUnitSize
    this.sequenceUnitSize = (this.options.sequenceUnitSize !== undefined) ? this.options.sequenceUnitSize : 5;

    // initialize the base view
    this.base_initialize();

    // add a class to denote the widget type
    var $div = $("#" + this.div_string);
    $div.addClass("barista-sequence-view");
  },

  /**
   * completely render the view
   * Updates both static and dynamic content in the view
   * @return {SequenceView} A reference to this to support chaining
   */
  render: function(){
    var self = this;
    // call BaristaBaseView's render function first so we can layer on top of it
    this.base_render();

    // render a sequence line
    this.renderSequenceLine();

    // render modifications
    this.renderModifications();

    // render modifications text
    // this.renderModificationsText();

    // configure zooming
    this.setupZoom();

    return this;
  },

  /**
   * update the dynamic potions of the view
   * @return {SequenceView} A reference to this to support chaining
   */
  update: function(){
    this.render();

    return this;
  },

  /**
   * calculate the length of the sequence in pixels
   * @return {float} the length in pixels of the sequence to render
   */
  getRenderLength: function() {
    if (this.sequenceUnitSize * this.model.get('displaySequence').length > this.width - 20) {
      return this.width -20;
    }
    return this.sequenceUnitSize * this.model.get('displaySequence').length;

  },

  /**
   * render the line depicting the base sequence
   * @return {SequenceView} A reference to this to support chaining
   */
  renderSequenceLine: function() {
    var renderLength = this.getRenderLength();
    this.fg_layer.selectAll('.sequenceLine').data([]).exit().remove();
    this.fg_layer.selectAll('.sequenceLine').data([1]).enter()
      .append('rect')
      .attr("class","sequenceLine")
      .attr("height", 2)
      .attr("width",renderLength)
      .attr("x",5)
      .attr("y",this.height / 2 - 2)
      .attr("fill","#BFBFBF");

    return this;
  },

  /**
   * render the modifications on the sequence
   */
  renderModifications: function() {
    var self = this,
        renderLength = this.getRenderLength();

    this.fg_layer.selectAll('.sequenceModification').data([]).exit().remove();
    this.fg_layer.selectAll('.sequenceModification')
      .data(this.model.get('modifications').models).enter()
      .append('g')
      .each(function(d) {

        d3.select(this)
        .append('circle')
        .attr("class","sequenceModification")
        .attr('r', 10)
        .attr('fill', function(d) {
          var color = self.modificationColors[d.get('modification')];
          if (color === undefined) {
            return '#BDBDBD';
          } else {
            return color;
          }
        })
        .attr('cx', function(d) {
          var totalLength = self.model.get('displaySequence').length,
              positionPct = d.get('index') / totalLength;
          return positionPct * (renderLength) + 10;
        })
        .attr("cy",self.height / 2);

        d3.select(this)
        .append('text')
        .attr("class","sequenceModificationText")
        .attr('x', function(d) {
          var totalLength = self.model.get('displaySequence').length,
              positionPct = d.get('index') / totalLength;
          switch (self.model.get('displaySequence')[d.get('index') - 1]) {
            case 'M':
              return positionPct * (renderLength) + 4;
              break;
            default:
              return positionPct * (renderLength) + 5;
          }

        })
        .attr("y",self.height / 2 + 5)
        .text(function (d) {
          return self.model.get('displaySequence')[d.get('index') - 1];
        })
        .attr('fill','white')
        .attr('font-family','Open Sans')
        .attr('font-weight', 'bold');

      });
  },

  /**
   * renders text overlays for modifications
   */
  renderModificationsText: function() {
    var self = this,
        renderLength = this.getRenderLength();

    this.fg_layer.selectAll('.sequenceModificationText').data([]).exit().remove();
    this.fg_layer.selectAll('.sequenceModificationText')
      .data(this.model.get('modifications').models).enter()
      .append('text')
      .attr("class","sequenceModificationText")
      .attr('x', function(d) {
        var totalLength = self.model.get('displaySequence').length,
            positionPct = d.get('index') / totalLength;
        switch (self.model.get('displaySequence')[d.get('index') - 1]) {
          case 'M':
            return positionPct * (renderLength) + 4;
            break;
          default:
            return positionPct * (renderLength) + 5;
        }

      })
      .attr("y",this.height / 2 + 5)
      .text(function (d) {
        return self.model.get('displaySequence')[d.get('index') - 1];
      })
      .attr('fill','white')
      .attr('font-family','Open Sans')
      .attr('font-weight', 'bold');
  },

  /**
   * configure zoom behavior
   */
  setupZoom: function () {
    var self = this;
    // create the zoom listener
    var zoomListener = d3.behavior.zoom()
      .scaleExtent([1, 3])
      .on("zoom", zoomHandler);

    // function for handling zoom event
    function zoomHandler() {
      self.fg_layer.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    // apply the zoom behavior to the svg image
    zoomListener(this.vis);
  }

});
