/**
 * bubble_view = new BubbleView({el: $("target_selector"),
									fg_color: "#1b9e77",
									span_class: "span4"});
 *									
 * A Backbone.View that displays a single level tree of data as a bubble plot
 * The view should be bound to a model such as a **PertCellBreakdownModel** that captures tree data in a
 * tree_object attribute
 * basic use:
 * bubble_view = new BubbleView({el: $("target_selector")});
 * optional arguments:
 * @param {string} fg_color    the hex color code to use as the foreground color of the view, defaults to
 *                             #1b9e77
 * @param {string} span_class  a bootstrap span class to size the width of the view, defaults to "span4"
 */

Barista.Views.BubbleView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "BubbleView",

	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.PertCellBreakdownModel(),

	/**
	 * overide the default Backbone.View initialize method to handle optional arguments, compile the view
	 * template, bind model changes to view updates, and render the view
	 */
	initialize: function(){
		// set up color options.  default if not specified
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "span4";

		// set up the plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 120;

		// set up the bubble minimum and maximum scale values
		this.min_val = (this.options.min_val !== undefined) ? this.options.min_val : undefined;
		this.max_val = (this.options.max_val !== undefined) ? this.options.max_val : undefined;

		// set up splitting categories
		this.v_split = (this.options.v_split !== undefined) ? this.options.v_split : undefined;
		this.h_split = (this.options.h_split !== undefined) ? this.options.h_split : undefined;

		// set up splitting category centers
		this.category_centers = (this.options.category_centers !== undefined) ? this.options.category_centers : {up: {x:0,y:-10},dn: {x:0,y:10}};

		// set up category colors
		this.category_colors = (this.options.category_colors !== undefined) ? this.options.category_colors : {up: "#D55E00",dn: "#56B4E9"};

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the vis
		this.render();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.render();} );
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	/**
	 * draw the view from scratch
	 */
	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();
		this.v_center = this.height / 2;
		this.h_center = this.width / 2;

		// rescale the width of the vis
		this.vis.transition().duration(1).attr("width",this.width);

		// grab the data from the model
		this.data = this.model.get('tree_object').children;

		// set up some data scaling
		var max_count, min_count;
		if (this.max_val !== undefined){
			max_count = this.max_val;
		}else{
			max_count = _.max(_.pluck(this.data,'count'));
		}
		if (this.min_val !== undefined){
			min_count = this.min_val;
		}else{
			min_count = _.min(_.pluck(this.data,'count'));
		}
		this.data_scale = d3.scale.linear().domain([min_count,max_count])
						.range([5,30]);

		// define the force directed graph layout
		this.force = d3.layout.force()
						.nodes(this.data)
						.gravity(0.1)
						.friction(0.9)
						.size([this.width, this.height])
						.on("tick",function(e){tick(e);})
						.charge(function(d){return -Math.pow(self.data_scale(d.count),2)/6;})
						.start();

		// draw the initial layout
		this.vis.selectAll("circle").data(this.force.nodes()).exit().remove();
		this.vis.selectAll("circle").data(this.force.nodes())
				.enter().append("circle")
				.attr("class",this.div_string + "_circle")
				.attr("fill",function(d){
					if (self.category_colors[d[self.v_split]] !== undefined){
						return self.category_colors[d[self.v_split]];
					}else{
						return self.fg_color;
					}
				})
				.attr("v_category",function(d){
					if (self.v_split !== undefined){
						return d[self.v_split];
					}else{
						return null;
					}
				})
				.attr("cx", Math.random() * 300)
				.attr("cy", Math.random() * 300)
				.attr("stroke","white")
				.attr("_id",function(d){return d._id;})
				.attr("r",function(d){return Math.sqrt(self.data_scale(d.count)/Math.PI);});

		// specify the nodes selection so we don't have to repeat the selection on each tick
        this.nodes = this.vis.selectAll("circle");
        this.nodes.call(this.force.drag());

		// reset a dampening variable for simulation
		this.damp = 0.1;

		/**
		 * tick function for use in the force class, decrements alpha value
		 * @param  {object} e  data from tick event
		 */
		function tick(e){
			self.vertical_split(e.alpha);
			self.nodes.attr("cx", function(d) {return d.x;})
                .attr("cy", function(d) {return d.y;})
                // .attr("r",function(d){return self.data_scale(d.count);});

        }
	},

	/**
	 * push bubbles vertically based on an attribute property
	 * @param  {number} alpha  in combination with damp value, creates spring constant for bubble animation
	 */
	vertical_split: function(alpha){
		var self = this;
		//select all circles on the page
		bubble_selection = this.vis.selectAll('circle');
		bubble_selection
		//edit the center y attribute
			.attr("cy",function(d){
				//if the vertical split category is undefined, return the y value of d
				if (self.category_centers[d[self.v_split]] === undefined){
					return(d.y);
				}
				//if the value of the vertical split category is 0, return the y value of d
				var category_y = self.category_centers[d[self.v_split]].y;
				if (category_y === 0){
					return(d.y);
				}
				//otherwise, add the current d.y value to the product of equations involving the vertical
				//center, vertical split category, dampening value, and alpha value
				else{
					d.y = d.y + (self.v_center + category_y - d.y) * (self.damp + 0.03) * alpha * 1.1;
					return(d.y);
				}
			})
			//edit the center x attribute
			.attr("cx",function(d){
				//if the vertical split category is undefined, return the y value of d
				if (self.category_centers[d[self.v_split]] === undefined){
					return(d.x);
				}
				//if the value of the vertical split category is 0, return the x value of d
				var category_x = self.category_centers[d[self.v_split]].x;
				if (category_x === 0){
					return(d.x);
				}
				//otherwise, add the current d.x value to the product of equations involving the horizontal
				//center, vertical split category, dampening value, and alpha value
				else{
					d.x = d.x + (self.h_center - category_x - d.x) * (self.damp + 0.03) * alpha * 1.1;
					return (d.x);
				}
			});
	},

	/**
	 * update the plot with new data
	 */
	update: function(){
		// stuff this into a variable for later use
		var self = this;

		// grab the data from the model
		var new_data = this.model.get('tree_object').children;

		// grab the current nodes
		var nodes = this.force.nodes();

		// update the nodes in this.force
		if (this.force.nodes().length <= new_data.length){
			this.force.nodes().forEach(function(o,i){
				_.extend(o,new_data[i]);
				_.extend(o,{x:nodes[i]['x'],y:nodes[i]['y']});
			});
			if (this.force.nodes().length < new_data.length){
				this.force.nodes(this.force.nodes().concat(new_data.slice(this.force.nodes().length,new_data.length)));
			}
		}else{
			this.force.nodes(this.force.nodes().slice(0,new_data.length));
			this.force.nodes().forEach(function(o,i){
				_.extend(o,new_data[i]);
				_.extend(o,{x:nodes[i]['x'],y:nodes[i]['y']});
			});
		}

		// draw the initial layout for new bubbles
		bubble_selection = this.vis.selectAll("circle").data(this.force.nodes());
		bubble_selection.enter()
				.append("circle")
				.attr("class",this.div_string + "_circle")
				.attr("fill",function(d){
					if (self.category_colors[d[self.v_split]] !== undefined){
						return self.category_colors[d[self.v_split]];
					}else{
						return self.fg_color;
					}
				})
				.attr("cx", function(d){return d.x;})
				.attr("cy", function(d){return d.y;})
				.attr("stroke","white")
				.attr("_id",function(d){return d._id;})
				.attr("r",0);

		// transition bubbles
		bubble_selection.transition().duration(500)
				.attr("r",function(d){return self.data_scale(d.count);});

		// remove bubbles with no data
		bubble_selection.exit().remove();

		// start the simulation again
		this.force.start();

		// specify the nodes selection so we don't have to repeat the selection on each tick
        this.nodes = this.vis.selectAll("circle");
        this.nodes.call(this.force.drag());

        /**
		 * tick function for use in the force class, decrements alpha value
		 * @param  {object} e  data from tick event
		 */
		function tick(e){
			self.vertical_split(e.alpha);
			self.nodes.attr("cx", function(d) {return d.x;})
                .attr("cy", function(d) {return d.y;})
                .attr("r",function(d){return self.data_scale(d.count);});

        }

	}
});
