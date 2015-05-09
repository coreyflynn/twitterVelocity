Barista.Views.GridView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "GridView",
/**
 * overrides the default Backbone.View initialize method
 */
	initialize: function(){
		var self = this;
		// default search value
		this.search_val = "";
		this.search_type = "single";

		// set up grid options
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col_lg_12";
		this.legend = (this.options.legend !== undefined) ? this.options.legend :null;
		this.no_download = (this.options.no_download !== undefined) ? this.options.no_download :null;
		this.no_slice = (this.options.no_slice !== undefined) ? this.options.no_slice :null;
		this.no_legend = (this.options.no_legend !== undefined) ? this.options.no_legend :null;
		this.edit = (this.options.edit !== undefined) ? this.options.edit : false;
		this.limit = (this.options.limit !== undefined) ? this.options.limit : 30;



		// set up a default collection and column definition for the grid to operate on
		this.collection = (this.options.collection !== undefined) ? this.options.collection : new Barista.Collections.PertCollection();
		this.columns = (this.options.columns !== undefined) ? this.options.columns : [{name: "pert_iname", label: "Reagent Name", cell: "string", editable: false},
																						{name: "pert_type_label", label: "Pert Type", cell: Barista.HTMLCell, editable: false},
																						{name: "num_inst", label: "Experiments", cell: "integer", editable: false}];

		// build the template
		this.compile_template();

		// build the grid on the template using a clickable row.  If a row is clicked, a grid:RowClick event
		// is fired with the row's model as the passed data.
		// build the clickable row
		var ClickableRow = Backgrid.Row.extend({
			events: {
				"click": "onClick"
			},
			/**
			 *  build the grid on the template using a clickable row
			 *  If a row is clicked, a grid:RowClick event is fired with the row's model as the passed data
			 */
			onClick: function () {
				self.trigger("grid:RowClick", this.model);
			},
			/**
			 * overide Backgrid.Row's native render method
			 */
			render: function () {
				this.$el.empty();
				var fragment = document.createDocumentFragment();
				for (var i = 0; i < this.cells.length; i++) {
					fragment.appendChild(this.cells[i].render().el);
				}
				this.el.appendChild(fragment);
				this.delegateEvents();

				this.$el.css("opacity",0);
				this.$el.animate({"opacity":1},1000);

				return this;
			},

			/**
			 * overide Backgrid.Row's native remove method
			 */
			remove: function () {
				this.$el.addClass("cmap-active-grid-row");
				this.$el.animate({"opacity":0},1000);
				var self = this;
				setTimeout(function(){
					for (var i = 0; i < self.cells.length; i++) {
						var cell = self.cells[i];
						cell.remove.apply(cell, arguments);
					}
					return Backbone.View.prototype.remove.apply(self, arguments);
				},1000);
			}
		});

		// build the grid
		this.grid = new Backgrid.Grid({
			row: ClickableRow,
			columns: this.columns,
			collection: this.collection
		});
		$("#" + this.div_string).append(this.grid.render().$el);

		// add a button to scroll to the top of the grid once it is scroll down
		this.add_scroll_to_top_button();

		//bind the table to a function to check for scroll boundaries
		$("#" + this.div_string,this.el).scroll(function(){self.checkscroll();});

		// bind the download text to a function to download the data in the table
		$("#" + this.div_string + "_download",this.el).click(function(){self.download_table();});

		// bind the edit text to a function to edit the data in the table
		$("#" + this.div_string + "_edit",this.el).click(function(){self.open_edit_table();});

		// bind the download text to a function to slice the data in the table out of the
		// Connectivity Map database.
		self.change_slice_button_state("slice");
	},

	checkscroll: _.debounce(function(){
		if ($("#" + this.div_string).scrollTop() > 30) {
			this.show_scroll_to_top_button();
		}else{
			this.hide_scroll_to_top_button();
		}

		var triggerPoint = 100;
		var pos = $("#" + this.div_string).scrollTop() + $("#" + this.div_string).height() + triggerPoint;
		if (!this.collection.isLoading && pos > $("#" + this.div_string)[0].scrollHeight){
			this.collection.skip += this.limit;
			this.update_collection(this.search_val,this.search_type,this.limit);
		}
	},100),

	/**
	 * adds a UI control to scroll the top of the grid
	 */
	add_scroll_to_top_button: function(){
		var self = this;
		this.scroll_to_top_button_id = this.div_string + 'scroll_button';
		this.$el.append('<button id="' + this.scroll_to_top_button_id + '" class="cmap_grid_to_top_button">Scroll to Top</button>');
		$("#" + this.scroll_to_top_button_id).click(function(){self.scroll_to_top();});
		this.hide_scroll_to_top_button();
	},

	/**
	 * scrolls the grid to the top of its container
	 * @param  {number} duration  the duration of the scroll animation in ms, defaults to 500
	 */
	scroll_to_top: function(duration){
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.div_string).animate({scrollTop:0},duration);
		this.hide_scroll_to_top_button();
	},

	/**
	 * scrolls the grid to the bottom of its container
	 * @param  {number} duration  the duration of the scroll animation in ms, defaults to 500
	 */
	show_scroll_to_top_button: function(duration){
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.scroll_to_top_button_id).clearQueue();
		$("#" + this.scroll_to_top_button_id).animate({opacity:1},duration);
	},

	/**
	 * hides the scroll to top button
	 * @param  {number} duration  the duration of the scroll animation in ms, defaults to 500
	 */
	hide_scroll_to_top_button: function(duration){
		var self= this;
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.scroll_to_top_button_id).clearQueue();
		$("#" + this.scroll_to_top_button_id).animate({opacity:0},duration);
	},

/**
 * changes the visible collection data and rejects the slice
 * @param  {string} search_val   the value to search for
 * @param  {string} search_type  the type of search that will be performed by getData
 * @param  {number} limit        the number of models to be fetched
 */
	replace_collection: function(search_val,search_type,limit){
		var getData_promise;
		var self = this;
		this.search_val = (search_val !== undefined) ? search_val : this.search_val;
		this.search_type = (search_type !== undefined) ? search_type : this.search_type;
		this.limit = (limit !== undefined) ? limit : this.limit;
		$("#" + this.div_string).show();
		$("#" + this.div_string).animate({opacity:1},500);
		this.collection.reset();
		this.collection.skip = 0;
		self.collection.maxCount = Infinity;
		getData_promise =  this.collection.getData(this.search_val,this.search_type,this.limit);
		this.listenToOnce(this.collection,"add", function(){
			this.trigger("grid:ReplaceCollection");
			this.trigger("grid:Add");
			this.resize_div();
			// reset the slice all data button and reject the slice
			// deferred if it is present
			self.change_slice_button_state("slice");
			if (self.slice_defer){
				self.slice_defer.reject();
			}
		});
		return getData_promise;
	},
/**
 * changes the visible collection data
 * @param  {string} search_val   the value to search for
 * @param  {string} search_type  the type of search that will be performed by getData
 * @param  {number} limit        the number of models to be fetched
 */
	update_collection: function(search_val,search_type,limit){
		var getData_promise;
		if (this.collection.models.length < this.collection.maxCount){
			var self = this;
			this.search_val = (search_val !== undefined) ? search_val : this.search_val;
			this.search_type = (search_type !== undefined) ? search_type : this.search_type;
			this.limit = (limit !== undefined) ? limit : this.limit;
			$("#" + this.div_string).show();
			$("#" + this.div_string).animate({opacity:1},500);
			getData_promise = this.collection.getData(this.search_val,this.search_type,this.limit);
			this.resize_div();
			this.listenToOnce(this.collection,"add", function(){
				this.trigger("grid:UpdateCollection");
				this.trigger("grid:Add");
			});
			return getData_promise;
		}
	},
/**
 * hides the visible data and rejects the slice
 */
	clear_collection: function(){
		var self = this;
		this.collection.skip = 0;
		$("#" + this.div_string).animate({opacity:0},500);
		window.setTimeout(function(){
			self.collection.reset();
			self.collection.maxCount = Infinity;
			$("#" + this.div_string).hide();

			// reset the slice all data button and reject the slice
			// deferred if it is present
			self.change_slice_button_state("slice");
			if (self.slice_defer){
				self.slice_defer.reject();
			}

		},500);
	},
/**
 * changes the height of the grid based on the number of elements it holds
 */
	resize_div: function(){
		var self = this;
		var container_height =  $("#" + this.div_string).height();
		setTimeout(function(){
			var data_height = self.collection.length * 30 + 40;
			var target_height = (data_height > 300) ? 300 : data_height;

			$("#" + self.div_string).stop();
			$("#" + self.div_string).animate({height:target_height},500);
		},500);
	},
	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		this.div_string = 'backgrid_target' + new Date().getTime();;
		this.$el.append(BaristaTemplates.CMapBaseGrid({div_string: this.div_string,
													   span_class: this.span_class,
													   legend: this.legend,
													   no_download: this.no_download,
													   no_slice: this.no_slice,
													   no_legend: this.no_legend,
													   edit: this.edit,
													}));
	},
/**
 * attempts to return data from a slice, and returns the slice button to its previous state if a failure
 * is detected
 */
	slice_all_table_data: function(){
		var self = this;
		// change the button state to progress
		this.change_slice_button_state("progress");

		// create a Deferred on the object to handle interaction with the slicing
		// operation.  This allows us to resolve the Deffered later in another
		// method before the ajax call returns if we need to
		this.slice_defer = $.Deferred();

		// If the Deferred resolves successfully, leave the button alone and let other the ajax call
		// below manipulate it.  If it is rejected, set the button back up to its original state.
		this.slice_defer.fail(function() {
				self.change_slice_button_state("slice");
			}
		);

		// grab the API 'q' query parameter from the grid's collection and send it
		// to sig_slice API.  if the slice job completes, check the return for a
		// file_url attribute and change the link in the slice button to expose the
		// link.  If it does not exist, the slice failed and we display a failure
		// message asking the user to try again
		sig_slice = '//prefix:8080/a2/sigslice?callback=?';
		$.ajax({
			dataType: 'json',
			url: sig_slice,
			data: {q: self.collection.q_param,l: 1000},
			
			success: function(res){
				if (res.file_url){
					self.change_slice_button_state("link",res.file_url);
				}else{
					self.change_slice_button_state("fail");
				}
			},

			error: function(){
				self.change_slice_button_state("fail");
			}
		});

		// if 60s pass, we assume that is too long and we
		// update the button with an error message and
		// resolve the deferred to indicate we finished the
		// ajax call normally.  This is a hack to emulate a 404 error in jsonp
		this.slice_timeout = setTimeout(function(){
			self.change_slice_button_state("fail");
		},60000);
	},
/**
 * changes the state of the slice button based on the current state
 * @param  {string} state  current state of the slice button (i.e. slice, progress, or link)
 * @param  {string} link   link to the slice
 */
	change_slice_button_state: function (state,link){
		var self = this;
		// unbind any handlers on the button
		$("#" + self.div_string + "_slice",self.el).unbind();

		// handle the re-binding of handlers and update the button text and icon
		switch (state){
			case "slice":
				// update the slice button to show an available data slice
				$("#" + self.div_string + "_slice",self.el).html('<font color="#0072B2"><i class="icon-cogs"></i> slice all data</font>');

				// rebind the click event and clear a timeout if present
				$("#" + this.div_string + "_slice",this.el).click(function(){self.slice_all_table_data();});
				clearTimeout(self.slice_timeout);
				break;

			case "progress":
				// indicate that we are making a data slice
				$("#" + this.div_string + "_slice",this.el).html('<font color="#0072B2"><i class="icon-cog icon-spin"></i> slicing</font>');

				// unbind all handlers so that we can't click the while while we are slicing
				$("#" + this.div_string + "_slice",this.el).unbind();
				break;

			case "link":
				// construct an html string to expose the link
				var html_string = ['<a href="',
								   link,
								   '" class="cmap-link">',
								   '<font color="#0072B2"><i class="icon-download"></i> download slice</font></a>'].join('');

				// update the button and resolve the deferred to
				// indicate we finished the ajax call normally
				$("#" + self.div_string + "_slice",self.el).html(html_string);
				self.slice_defer.resolve();
				clearTimeout(self.slice_timeout);
				break;

			case "fail":
				// update the button with an error message,
				// resolve the deferred and clear the Timeout
				$("#" + self.div_string + "_slice",self.el).html('<font color="#D55E00"><i class="icon-exclamation"></i> slice failed. try again?</font>');
				$("#" + self.div_string + "_slice",self.el).click(function(){self.slice_all_table_data();});
				self.slice_defer.resolve();
				clearTimeout(self.slice_timeout);
				break;
		}

	},
	/**
	 * download the backing data that matches the current model state
	 */
	download_table: function(){
		var self = this;
		// indicate we are downloading something
		$("#" + this.div_string + "_download",this.el).html('<font color="#0072B2"><i class="icon-refresh icon-spin"></i> exporting</font>');

		// set up api call parameters
		var url = this.collection.url;
		var params = {q: this.collection.q_param,
            l:0,
            s:this.collection.s_param};

        // grab column header names
        var headers = _.pluck(this.columns,'label').join('\t');

        // grab column data names
        var names = _.pluck(this.columns,'name');

        // make a JSON API call to grab data for the table
		$.getJSON(url,params,function(res){
			var lines = [headers];
			res.forEach(function(r){
				var line_data = [];
				// for each data name in the table, grab the data. translate html
				// content to plain text where required
				names.forEach(function(n){
					switch (n){
					case "pert_type_label":
						line_data.push(Barista.CMapPertTypeAlias(r["pert_type"]).acronym);
						break;
					case "view_result_link":
						line_data.push(r["standard_result"]);
						break;
					case "rpt":
						line_data.push(r.params.rpt);
						break;
					case "tool_id":
						line_data.push(r.params.tool_id);
						break;
					case "date":
						line_data.push(String(new Date(parseInt(r["_id"].substring(0,8), 16)*1000)));
						break
					default:
						line_data.push(String(r[n]));
					}
				});
				line_string = line_data.join('\t');
				lines.push(line_string);
			});
			var lines_string = lines.join("\n");
			var blob = new Blob([lines_string], {type: "text/plain;charset=utf-8"});
			var timestamp = new Date().getTime();
			saveAs(blob, "CMapTable" + timestamp + ".txt");
			$("#" + self.div_string + "_download",self.el).html('<font color="#0072B2"><i class="icon-share"></i> export table</font>');
		});
	},

	/**
	 * open up a column to show editing buttons
	 */
	open_edit_table: function(){
		var self = this;
		console.log("opening edit");
		this.grid.columns.unshift(({name: "edit", label: "Edit", cell: Barista.HTMLCell, editable: false}));
		$("#" + this.div_string + "_edit",this.el).html('<font color="#e51c23"><i class="fa fa-times-circle"></i> done editing </font>');
		$("#" + this.div_string + "_edit",this.el).unbind();
		$("#" + this.div_string + "_edit",this.el).click(function(){self.close_edit_table();});
	},

	/**
	 * close column showing editing buttons
	 */
	close_edit_table: function(){
		var self = this;
		var idCol = this.grid.columns.where({ name: "edit" });
		this.grid.removeColumn(idCol);
		$("#" + this.div_string + "_edit",this.el).html('<font color="#e51c23"><i class="fa fa-times-circle"></i> edit </font>');
		$("#" + this.div_string + "_edit",this.el).unbind();
		$("#" + this.div_string + "_edit",this.el).click(function(){self.open_edit_table();});
	},

	/**
	 * hides the view by dimming the opacity and hiding it in the DOM
	 * @param  {number}  duration  the time in ms for the hide animation. defualts to 500
	 * pert_detail_view.hide(duration);
	 */
	hide: function(duration){
		var self = this;
		this.$el.animate({opacity:0},duration);
		setTimeout(function(){self.$el.hide();},duration);
	},

	/**
	 * shows the view by brightening the opacity and showing it in the DOM
	 * @param  {number}  duration  the time in ms for the hide animation. defualts to 500
	 * pert_detail_view.show(duration);
	 */
	show: function(duration){
		this.$el.show();
		this.$el.animate({opacity:1},duration);
	}
});
