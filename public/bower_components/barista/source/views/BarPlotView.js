/**
 * bar_plot_view = new BarPlotView({el: $("target_selector",
									bg_color:"#ffffff", 
									fg_color: "#1b9e77",
									span_class: "span4",
									scale_by: undefined,
									range: undefined,
									log: false,
									min_lock: undefined,
									max_lock: undefined,
									min_expand: false,
									max_expand: false,
									plot_height: 120});
 *									
 * A Backbone.View that displays a scatter plot
 * the view's model is assumed to have the same defaults as specified in BarPlotModel
 * basic use:
 * bar_plot_view = new BarPlotView();
 * optional arguments:
 * @param {string}  bg_color     the hex color code to use as the backgound of the view, defaults to
 *                               #ffffff
 * @param {string}  fg_color     the hex color code to use as the foreground color of the view, defaults to
 *                               #1b9e77
 * @param {string}  span_class   a bootstrap span class to size the width of the view, defaults to
 *                               "span12"
 * @param {array}   range        a two element array specifying the plotting bounds of the plot, defaults
 *                               to [min(data),max(data)]
 * @param {boolean} log          if set to true, plots the data on a log scale, defaults to false
 * @param {number}  min_lock     if set, locks the minimum of the range at the given value. Ignored if
 *                               range is set. defaults to undefined
 * @param {number}  max_lock     if set, locks the maximum of the range at the given value. Ignored if
 *                               range is set. defaults to undefined
 * @param {boolean} min_expand   if set, allows the minimum of the range to expand if data is found below
 *                               it. defaults to false
 * @param {boolean} max_expand   if set, allows the maximum of the range to expand if data is found above
 *                               it. defaults to false
 * @param {string}  orientation  sets the orientation of the bar plot. options are 'horizontal' or
 *                               'vertical'. defaults to 'vertical'
 * @param {number}  plot_height  the height of the plot in pixels, defaults to *120*
 */

Barista.Views.BarPlotView = Barista.Views.BaristaBaseView.extend({
	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.BarPlotModel(),

	/**
	 * overide the default Backbone.View initialize method to handle optional arguments, compile the view
	 * template, bind model changes to view updates, and render the view
	 */
	initialize: function(){
		// set up x and y range and determine if are going to draw the axes dynamically
		this.range = (this.options.range !== undefined) ? this.options.x_range : undefined;
		this.dynamic_range = (this.range === undefined) ? true : false;

		// set up axis expansion and lock features
		this.min_lock = (this.options.min_lock !== undefined) ? this.options.min_lock : undefined;
		this.max_lock = (this.options.max_lock !== undefined) ? this.options.max_lock : undefined;

		this.min_expand = (this.options.min_expand !== undefined) ? this.options.min_expand : undefined;
		this.max_expand = (this.options.max_expand !== undefined) ? this.options.max_expand : undefined;

		// set up log flag
		this.log = (this.options.log !== undefined) ? this.options.log : false;

		// set up the margin
		this.margin = (this.options.margin !== undefined) ? this.options.margin : 50;

		// set up the orientation
		this.orientation = (this.options.orientation !== undefined) ? this.options.orientation : 'vertical';

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// run BaristaBaseView's base_initialize method to handle boilerplate view construction
		// and initial view rendering
		this.base_initialize();

		// build Axes
		this.build_axes();

	},

	/**
	 * completely redraw the view
	 * Updates both static and dynamic content in the view
	 */
	render: function(){
		this.base_render();
		this.init_plot();
		this.update();
	},

	/**
	 * initialize the static parts of the view's panel
	 */
	init_plot: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// build Axes
		this.build_axes();

		// style the axis
		this.style_axes();

		// render the bar data
		if (this.orientation === 'horizontal'){
			this.render_horizontal_bars();
		}else{
			this.render_vertical_bars();
		}

		// plot the title
		this.bg_layer.selectAll('.title').data([]).exit().remove();
		this.bg_layer.selectAll('.title').data([1]).enter().append('text')
			.attr("class","title title")
			.attr("x",this.width/2)
			.attr("y",this.margin/2)
			.style("text-anchor","middle")
			.text(this.model.get('title'));
	},

	/**
	 * update the dynamic potions of the view
	 */
	update: function(){
		var self = this;
		
		// get model data
		this.data = this.model.get('data');
		
		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();

		// build Axes
		this.build_axes();

		// update the bar data
		if (this.orientation === 'horizontal'){
			this.update_horizontal_bars();
		}else{
			this.update_vertical_bars();
		}
	},

	/**
	 * utility function used to get the x and y ranges used in the plot
	 */
	set_ranges: function(){
		var data,min,max;
		// calculate the range. If we need to caluclate it dynamically, check the lock and expand
		// parameters for the axis
		if (this.dynamic_range === true){
			data = this.model.get('data');

			// if the data is of length larger than 1, calculate the range, otherwise set the range to [0,0]
			if (data.length > 0 ){
				// check the min lock and expand flags and report the min of the range accordingly
				if (this.min_lock === undefined){
					min = _.min(data);
				}else{
					if (this.min_expand){
						data_min = _.min(data);
						min = (this.min_lock > data_min) ? data_min : this.min_lock;
					}else{
						min = this.min_lock;
					}
				}

				// check the max lock and expand flags and report the max of the range accordingly
				if (this.max_lock === undefined){
					max = _.max(data);
				}else{
					if (this.max_expand){
						data_max = _.max(data);
						max = (this.max_lock < data_max) ? data_max : this.max_lock;
					}else{
						max = this.max_lock;
					}
				}
				this.range = [min,max];
			}else{
				this.range = [0,0];
			}
		}
	},

	/**
	 * utility function used to get the x and y scales used in the plot
	 */
	set_scales: function(){
		if (this.log){
			this.x_scale=d3.scale.log().domain([this.range[0],this.range[1]]).range([this.margin, this.width - this.margin]);
		}else{
			this.x_scale=d3.scale.linear().domain([this.range[0],this.range[1]]).range([this.margin, this.width - this.margin]);
		}
		if (this.log){
			this.y_scale=d3.scale.log().domain([this.range[1],this.range[0]]).range([this.margin, this.height - this.margin]);
		}else{
			this.y_scale=d3.scale.linear().domain([this.range[1],this.range[0]]).range([this.margin, this.height - this.margin]);
		}
	},

	/**
	 * utility function used to build x and y axes
	 */
	build_axes: function(){
		var self = this;

		this.xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");
		this.yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("left");

		// plot the appropriate axis depending on the orientation of the plot
		this.bg_layer.selectAll('.axis').data([]).exit().remove();
		if (this.orientation === 'horizontal'){
				self.bg_layer.append("g")
					.attr("class", "axis x-axis")
					.attr("transform", "translate(0," + (self.height - self.margin) + ")")
					.call(self.xAxis);
		}else{
			self.bg_layer.append("g")
				.attr("class", "axis y-axis")
				.attr("transform", "translate(" + self.margin + ",0)")
				.call(self.yAxis);
		}
	},

	/**
	 * utility function to apply custom styles to axis components
	 */
	style_axes: function(){
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");
	},

	/**
	 * draws bars in vertical mode
	 */
	render_vertical_bars: function(){
		var self = this;
		// get the model's data
		this.data = this.model.get('data');

		// figure out how wide each bar will be
		this.x_domain = this.x_scale.range();
		this.bar_width = (this.x_domain[1] - this.x_domain[0]) / this.data.length;

		// plot the data points
		this.bg_layer.selectAll('.data_bar').data([]).exit().remove();
		this.bg_layer.selectAll('.data_bar').data(this.data).enter().append('rect')
			.attr("class","data_bar")
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale(this.range[0]))
			.attr("width",this.bar_width)
			.attr("height",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('axis_title'));

		// plot the labels if they are there
		var labels = this.model.get('data_labels');
		if (labels.length > 0){
			this.bg_layer.selectAll('.bar_label').data([]).exit().remove();
			this.bg_layer.selectAll('.bar_label').data(labels).enter().append('text')
				.attr('class','bar_label')
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',0)
				.style("text-anchor","middle")
				.text(function(d){return d;});
		}

		// style the axis
		this.style_axes();
	},

	/**
	 * draws bars in horizontal mode
	 */
	render_horizontal_bars: function(){
		var self = this;
		// get the model's data
		this.data = this.model.get('data');

		// figure out how tall each bar will be
		this.y_domain = this.y_scale.range();
		this.bar_height = (this.y_domain[1] - this.y_domain[0]) / this.data.length;

		// plot the data points
		this.bg_layer.selectAll('.data_bar').data([]).exit().remove();
		this.bg_layer.selectAll('.data_bar').data(this.data).enter().append('rect')
			.attr("class","data_bar")
			.attr("y",function(d,i){return self.bar_height*i;})
			.attr("x",this.margin + 2)
			.attr("height",this.bar_height)
			.attr("width",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('axis_title'));
	},

	/**
	 * updates the data in the bars in vertical orientation
	 */
	update_vertical_bars: function(){
		var self = this;
		// build Axes
		this.build_axes();

		// figure out how wide each bar will be
		this.x_domain = this.x_scale.range();
		this.bar_width = (this.x_domain[1] - this.x_domain[0]) / this.data.length;

		// plot new data points
		var bar_selection = this.bg_layer.selectAll('.data_bar').data(this.data);
		bar_selection.enter().append('rect')
			.attr("class","data_bar")
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale(this.range[0]))
			.attr("width",this.bar_width)
			.attr("height",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// transition points
		bar_selection.transition().duration(500)
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale)
			.attr("width",this.bar_width)
			.attr("height",function(d){return self.y_scale(self.range[0]) - self.y_scale(d)})
			.attr("opacity",1);

		// remove excess points 
		bar_selection.exit().remove();

		// update the labels if they are there
		var labels = this.model.get('data_labels');
		if (labels.length > 0){
			var bar_label_selection = this.bg_layer.selectAll('.bar_label').data(labels);
			bar_label_selection.enter().append('text')
				.attr('class','bar_label')
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',0)
				.style("text-anchor","middle")
				.text(function(d){return d;});

			bar_label_selection.transition().duration(500)
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',1);

			bar_label_selection.exit().remove();
		}else{
			this.bg_layer.selectAll('.bar_label').data([]).exit().remove();
		}

		// transition the axes
		this.vis.selectAll('.y-axis').transition().duration(500).call(this.yAxis);
		this.style_axes();
	},

	/**
	 * updates the data in the bars in vertical orientation
	 */
	update_horizontal_bars: function(){
		var self = this;
		// figure out how tall each bar will be
		this.y_domain = this.y_scale.range();
		this.bar_height = (this.y_domain[1] - this.y_domain[0]) / this.data.length;

		// plot new data points
		var bar_selection = this.bg_layer.selectAll('.data_bar').data(this.data);
		bar_selection.enter().append('rect')
			.attr("class","data_bar")
			.attr("y",function(d,i){return self.bar_height*i;})
			.attr("x",this.margin + 2)
			.attr("height",this.bar_height)
			.attr("width",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// transition points
		bar_selection.transition().duration(500)
			.attr("width",this.x_scale)
			.attr("opacity",1);

		// remove excess points 
		bar_selection.exit().remove();

		// transition the axes
		this.vis.selectAll('.x-axis').transition().duration(500).call(this.xAxis);
		this.style_axes();
	}
});