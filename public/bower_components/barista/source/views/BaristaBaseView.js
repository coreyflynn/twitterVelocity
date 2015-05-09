/**
 * base_view = new BaristaBaseView({el: $("target_selector",
									bg_color:"#ffffff",
									fg_color: "#1b9e77",
									span_class: "col-lg-12",
									plot_height: 120});
 * to extend BaristaBaseView, use

		extended_view = BaristaBaseView.extend({
										...
										});
 *										
 * A Backbone.View the serves as the base view for other views in the barista library
 * BaristaBaseView provides common functionality for views including standard initialization, redraw,
 * render, template compilation, and png export functions
 * This view by itself will construct a single panel with a png export option, but it is meant to be used
 * as the base view that more complex views extend
 * basic use:
 * base_view = new BaristaBaseView();
 * optional arguments:
 * @param {string}  bg_color     the hex color code to use as the backgound of the view, defaults to
 *                               #ffffff
 * @param {string}  fg_color     the hex color code to use as the foreground color of the view, defaults
 *                               to #1b9e77
 * @param {string}  span_class   a bootstrap span class to size the width of the view, defaults to
 *                               "col-lg-12"
 * @param {number}  plot_height  the height of the plot in pixels, defaults to 120
 * @param {boolean} png          show the png export button. defaults to true
 */
Barista.Views.BaristaBaseView = Backbone.View.extend({
	/**
 * initialize the view
 * Views that extend BaristaBaseView should impliment code overiding this method
 * If extended BaristaBaseViews want to use the built in base_initialize method of BaristaBaseView, they
 * should call it in their redraw method
 * As an example:
 * initialize: function(){
				this.base_initialize();
				//your code here
				}
 */
	initialize: function(){
		this.base_initialize();
	},

	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "BaristaBaseView",

	/**
	 * default model to Backbone.Model
	 * This default is only provided to make the view functional as a un-extended standalone
	 * An appropriate data model should be supplied for all views that extend BaristaBaseView
	 * @type {Backbone}
	 */
	model: new Backbone.Model(),

	/**
	 * overide the default Backbone.View initialize method to handle optional arguments, compile the view
	 * template, bind model changes to view updates, and render the view
	 * This method is provided so it can be used in view that extend BaristaBaseView
	 */
	base_initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the default height for the plot
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 120;

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-12";

		// set up the png option
		this.png = (this.options.png !== undefined) ? this.options.png : true;

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

		// make sure that the top level div target is set to hide overflow content
		$("#" + this.div_string).css("overflow","hidden");

		// render the vis
		this.render();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.render();} );

		return this;
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		var self = this;
		this.div_string = 'barista_view' + new Date().getTime();
		this.compiled_template = BaristaTemplates.d3_target;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	/**
 * completely render the view
 * Updates both static and dynamic content in the view
 * Views that extend BaristaBaseView should impliment draw code overiding this method
 * If extended BaristaBaseViews want to use the built in base_render method of BaristaBaseView, they should
 * call it in their render method
 * As an example:
 * render: function(){
			this.base_render();
			//your code here
			}
 */
	render: function(){
		this.base_render();
		return this;
	},

	/**
	 * completely redraw the view
	 * Updates both static and dynamic content in the view
	 * This method is provided so it can be used in view that extend BaristaBaseView
	 */
	base_render: function(){
		// stuff this into a variable for later use
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		this.vis.selectAll('.controls_layer').data([]).exit().remove();
		this.controls_layer = this.vis.append("g").attr("class", "controls_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).outerWidth();
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

		// add a png export overlay
		if (this.png) {
			this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
			this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
		}


		return this;
	},

	/**
	 * update the dynamic portions of the view
	 */
	update: function(){
		return this;
	},

	/**
	 * save the current state of the view into a png image
	 */
	save_png: function(){
		// do any pre save work that the child class may require
		this.save_png_pre();

		//set the animate the div containing the view by applying and then removing
		// css classes that defined the transitions we want
		var $div = $("#" + this.div_string);
		$div.addClass("barista-base-view");
		$div.toggleClass("exporting");
		setTimeout(function(){$div.toggleClass("exporting");},500);

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
		var filename = this.name + new Date().getTime() + ".png";
		if (canvas.toBlob){
			canvas.toBlob(function(blob){
				saveAs(blob,filename);
				});
		}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);

		// do any post save work that the child class may require
		this.save_png_post();
	},

	/**
	 * dummy method that should be overridden if there is any work to do before saving the png image of
	 * the view
	 * For example, removing elements that will not render properly could be done before saving the image
	 * This function is called as the first step of save_png
	 */
	save_png_pre: function(){},

	/**
	 * dummy method that should be overridden if there is any work to do after saving the png image of
	 * the view
	 * For example, restoring elements that were removed before saving could be done after saving the image
	 * This function is called as the last step of save_png
	 */
	save_png_post: function(){},

	/**
	 * hides the view by dimming the opacity and hiding it in the DOM
	 * @param  {number} duration  the time in ms for the hide animation. defualts to 1
	 * pert_detail_view.hide(duration);
	 */
	hide: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		var self = this;
		this.$el.animate({opacity:0},duration);
		setTimeout(function(){self.$el.hide()},duration);
	},

	/**
	 * shows the view by brightening the opacity and showing it in the DOM
	 * @param  {number} duration  the time in ms for the hide animation, defualts to *1*
	 * pert_detail_view.show(duration);
	 */
	show: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		this.$el.show();
		this.$el.animate({opacity:1},duration);
	}
});
