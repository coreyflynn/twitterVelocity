/**
 * A Backbone.View that displays a simple LDMap
 * The view is normally paired with a HeatMapModel, but works with any model that provides *data*,*cid*,
 * and title attributes
 * example usage:
 * LDMap_view = new LDMapView({el: $("target_selector"),
												model: new HeatmapModel(),
												template: BaristaTemplates.d3_target,
												bg_color: "#ffffff",
												low_color: "#0000ff",
												high_color: "#ff0000",
												color_scale: undefined,
												plot_height: 300,
												span_class: "span12"
												});
 *
 * optional arguments:
 * @param {string}   tenplate     The handlebars template to use. Defaults to BaristaTemplates.d3_target
 * @param {string}   bg_color     the hex color code to use as the backgound of the view, defaults to
 *                                #ffffff
 * @param {string}   low_color    the hex color code to use as lowest value color in the LDMap, defaults to
 *                                #0000ff
 * @param {string}   high_color   the hex color code to use as highest value color in the LDMap, defaults
 *                                to #ff0000
 * @param {d3.scale} color_scale  custom color scale to use in the LDMap.  If supplied, low_color and
 *                                high_color are ignored, defaults to undefined
 * @param {number}   plot_height  the height of the LDMap to generate in pixels, defaults to 300
 * @param {string}   span_class   a bootstrap span class to size the width of the view, defaults to
 *                                "span12"
 */

Barista.Views.LDMapView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "LDMapView",

	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.HeatmapModel(),

	/**
	 * overide the defualt Backbone.View initialize method to bind the view to model changes, bind window
	 * resize events to view re-draws, compile the template, and render the view
	 */
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.low_color = (this.options.low_color !== undefined) ? this.options.low_color : "#0000ff";
		this.high_color = (this.options.high_color !== undefined) ? this.options.high_color : "#ff0000";
		this.color_scale = (this.options.color_scale !== undefined) ? this.options.color_scale : undefined;

		// set up the defualt plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 300;
		// set up the default template
		this.template = (this.options.template !== undefined) ? this.options.template : BaristaTemplates.d3_target;

		// set up the default span class
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "#span12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view and draw it for the first time
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the view for the first time
		this.redraw();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		var self = this;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.$el.append(this.template({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	/**
	 * completely redraw the view. Updates both static and dynamic content in the view
	 */
	redraw: function(){
		this.init_panel();
		this.render();
	},

	/**
	 * initialize the static parts of the view's panel
	 */
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// set up the margin
		this.margin = 50;

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.ld_cell_layer').data([]).exit().remove();
		this.ld_cell_layer = this.vis.append("g").attr("class", "ld_cell_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// determine the height and width of cells in the heatmap
		if (this.height < this.width){
			this.cell_height = (this.height - this.margin) / this.model.get('data').length;
			this.cell_width = (this.height - this.margin) / this.model.get('data')[0].length;
		}else{
			this.cell_height = (this.width - this.margin) / this.model.get('data').length;
			this.cell_width = (this.width - this.margin) / this.model.get('data')[0].length;
		}

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// draw the LDMap cells
		this.ld_cell_layer.selectAll('.heatmap_cell').data([]).exit().remove();
		this.ld_cell_layer.selectAll('.heatmap_cell').data(this.unraveled_data).enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('transform',function(d){
				var x = self.cell_width + self.x_offset;
				var y = self.cell_height + self.margin;
				return 'rotate(45,' + x + ',' + y + ')';
			})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		// draw the row labels
		this.fg_layer.selectAll('.heatmap_rid').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid')).enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',function(d,i){return self.diamond_height*i + self.diamond_height/2 + self.margin;})
			.attr('text-anchor','end')
			.attr('dx','-.2em')
			.text(function(d){return d;});

		// add a png export overlay
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",this.x_offset)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.attr('text-anchor','end')
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	/**
	 * update the dynamic potions of the view
	 */
	render: function(){
		var self = this;
		// determine the height and width of cells in the heatmap
		var usable_height = this.height - this.margin;
		this.diamond_height = usable_height / this.model.get('data').length;
		this.cell_height = this.cell_width = Math.sqrt(Math.pow(this.diamond_height,2) / 2);

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// draw the heatmap cells
		var cell_selection = this.ld_cell_layer.selectAll('.heatmap_cell').data(this.unraveled_data);
		cell_selection.enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',this.x_center)
			.attr('y',(this.height - this.margin)/2)
			.attr('width',0)
			.attr('height',0)
			.attr('opacity',0)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.transition().duration(500)
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('transform',function(d){
				var x = self.cell_width + self.x_offset;
				var y = self.cell_height + self.margin;
				return 'rotate(45,' + x + ',' + y + ')';
			})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('opacity',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.exit().remove();

		// draw the row labels
		rid_selection = this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid'));
		rid_selection.enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',(this.height - this.margin)/2)
			.attr('opacity',0)
			.attr('text-anchor','end')
			.attr('dy','-.5em')
			.text(function(d){return d;});

		rid_selection.transition().duration(500)
			.attr('opacity',1)
			.attr('x',this.cell_width + this.x_offset)
			.attr('y',function(d,i){return self.diamond_height*i + self.diamond_height/2 + self.margin;})
			.text(function(d){return d;});

		rid_selection.exit().remove();
	},

	/**
	 * internal utility function to express 2D array data as a flat data array of objects with array
	 * coordinates and data value as attributes
	 * @param {array} data  2D array of data
	 */
	unravel_data: function(data){
		unraveled_data = [];
		data.forEach(function(i_e,i){
			i_e.forEach(function(j_e,j){
				if (i < j){
					unraveled_data.push({i:j, j:i, value:j_e});
				}
			});
		});
		return unraveled_data;
	},

	/**
	 * save the current state of the view into a png image
	 */
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapHeatmapView" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);});}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});