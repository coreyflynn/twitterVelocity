/**
 * tag_list_view = new TagListView({el: $("target_selector",
									bg_color:"#ffffff", 
									fg_color: "white",
									tag_color: "gray",
									span_class: "col-lg-12",
									plot_height: 120,
									display_attribute: "cid"});
 *
 * A Backbone.View that displays a list of objects in a collection as tags
 * The tags are drawn as rounded rectangles with text inside
 * The text corresponds to the cid attributes in the collection by defaul, but can be customized to display
 * other fields if required
 * basic use:
 * tag_list_view = new TagListView();
 * optional arguments:
 * @param {string} bg_color       the hex color code to use as the backgound of the view, defaults to
 *                                #ffffff
 * @param {string} fg_color       the hex color code to use as the foreground color of the view, defaults
 *                                to white
 * @param {string} tag_color      the hex color code to use as the tag color of the view, defaults to gray
 * @param {string} span_class     a bootstrap span class to size the width of the view, defaults to
 *                                "col-lg-12"
 * @param {number} plot_height    the height of the plot in pixels, defaults to 120
 * @param {string} display_field  the model attribute to display for each model in the view's colleciton.
 *                                defualts to 'cid'
 */

Barista.Views.TagListView = Barista.Views.BaristaBaseView.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "TagListView",

	/**
	 * set of the default model for the view
	 * @type {Backbone}
	 */
	model: new Backbone.Model(),

	/**
	 * set up a default collection for the view to work with
	 * @type {Backbone}
	 */
	collection: new Backbone.Collection(),

	/**
	 * overide the default Backbone.View initialize method to handle optional arguments, compile the view
	 * template, bind model changes to view updates, and render the view
	 */
	initialize: function(){
		// initialize the base view
		this.base_initialize();

		// set up a display attribute
		this.display_attribute = (this.options.display_attribute !== undefined) ? this.options.display_attribute : 'cid';

		// set up a tag color to use
		this.tag_color = (this.options.tag_color !== undefined) ? this.options.tag_color : 'black';

		// look for custom listeners
		this.listener = (this.options.listener !== undefined) ? this.options.listener : undefined;

		this.listener = (this.options.listener !== undefined) ? this.options.listener : undefined;

		// clear built in listeners
		this.stopListening();

		// add listeners for the collection and trigger an update when it changes
		if (this.listener !== undefined){
			this.listenTo(this.collection,this.listener, this.update);
		}else{
			this.listenTo(this.collection,'add', this.update);
			this.listenTo(this.collection,'remove', this.update);
			this.listenTo(this.collection,'reset', this.update);
			this.listenTo(this.collection,'sort', this.update);
		}
	},

	/**
	 * completely render the view
	 * Updates both static and dynamic content in the view
	 */
	render: function(){
		var self = this;
		// call BaristaBaseView's render function first so we can layer on top of it
		this.base_render();

		// add a text element for each unique item in the collection
		this.x_offsets = [5];
		this.row_number = 0;
		this.y_offsets = [];
		this.lengths = [];
		this.tags = [];
		this.collection.models.forEach(function(model){
			self.tags.push(model.get(self.display_attribute));
		});
		this.tags = _.unique(this.tags);
		this.draw_tags();

		return this;
	},

	/**
	 * update the dynamic potions of the view
	 */
	update: function(){
		var self = this;
		// call BaristaBaseView's render function first so we can layer on top of it
		this.base_render();

		// add a text element for each unique item in the collection
		this.x_offsets = [5];
		this.row_number = 0;
		this.y_offsets = [];
		this.lengths = [];
		this.tags = [];
		this.collection.models.forEach(function(model){
			self.tags.push(model.get(self.display_attribute));
		});
		this.tags = _.unique(this.tags);
		this.draw_tags();

		return this;
	},

	/**
	 * fits the view height to the height taken by the tags displayed
	 */
	fit_height: function(){
		// set the view's height attribute based on the number of rows in the
		// vis
		var EmSize = Barista.getEmSizeInPixels(this.div_string);
		this.height = (this.row_number * 1.5 + 3.5) * EmSize;

		// rescale the height of the vis
		$("#" + this.div_string).animate({height:this.height},500);
		this.vis.transition().attr("height",this.height);
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1])
			.transition(500)
			.attr("y",this.height - 10);

	},

	/**
	 * utility function to draw tags diven a data set
	 */
	draw_tags: function(){
		var self = this;
		// draw the foreground text of all the tags
		this.fg_layer.selectAll('.tag_list_text').data([]).exit().remove();
		this.fg_layer.selectAll('.tag_list_text').data(this.tags).enter().append('text')
			.attr("class","tag_list_text")
			.text(function(d){return d;})
			.attr("x",function(d,i){
				self.lengths.push(this.getComputedTextLength() + 15);
				var current_x_offset = self.x_offsets[i];
				if (current_x_offset + self.lengths[i] > self.width){
					self.x_offsets[i] = 5;
					self.x_offsets.push(self.lengths[i] + self.x_offsets[i]);
					self.row_number += 1;
				}else{
					self.x_offsets.push(self.lengths[i] + self.x_offsets[i]);
				}
				self.y_offsets.push((self.row_number * 1.5 + 1));
				return self.x_offsets[i];
			})
			.attr("y",function(d,i){return self.y_offsets[i] + 'em';})
			.attr("opacity",1)
			.attr("fill",this.fg_color)
			.style("cursor","pointer")
			.on("click",function(d){self.trigger("TagListView:DidSelect",{val: d});});

		// draw the background of all the tags
		this.bg_layer.selectAll('.tag_list_rect').data([]).exit().remove();
		this.bg_layer.selectAll('.tag_list_rect').data(this.tags).enter().append('rect')
			.attr("class","tag_list_rect")
			.attr("x",function(d,i){return self.x_offsets[i] - 5;})
			.attr("y",function(d,i){return (self.y_offsets[i] - 1) + 'em';})
			.attr("rx",4)
			.attr("ry",4)
			.attr('width',function(d,i){return self.lengths[i] - 4;})
			.attr('height','1.2em')
			.attr("opacity",1)
			.attr("fill",this.tag_color);
		this.fit_height();

		return this
	}
});
