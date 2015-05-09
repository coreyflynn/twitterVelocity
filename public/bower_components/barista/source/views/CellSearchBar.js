/**
 * A Backbone.View that exposes a custom search bar.  The search bar provides autocomplete
 * functionality for Connectivity Map pert_inames and cell_ids.  When the user types in the
 * search view's input, a "search:DidType" event is fired.
 * @class PertSearchBar
 * @constructor
 * @extends Backbone.View
*/
Barista.Views.CellSearchBar = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
 */
	name: "CellSearchBar",
/**
 * overrides the default Backbone.View initialize method
 */
	initialize: function(){
		var self = this;

		/**
		 * determines whether or not the search view will match cell lines for autocomplete
		 * @property match_cell_lines
		 * @default true
		 * @type Boolean
		*/
		// determine whether or not we will match cell line strings in the autocomplete
		this.match_cell_lines = (this.options.match_cell_lines !== undefined) ? this.options.match_cell_lines : true;

		// custom placeholder if specified
		this.placeholder = (this.options.placeholder !== undefined) ? this.options.placeholder : "search cell lines";

		// grab cell_ids and store them as an atribute of the view
		var cellinfo = Barista.APIURL + '/a2/cellinfo?callback=?';
		var params = {q:'{"cell_id":{"$regex":""}}',d:"cell_id"};
		$.getJSON(cellinfo,params,function(res){
			self.cell_lines = res;
			self.render();

			// once the view is rendered, bind a change event to trigger a "search:DidType" event from the view
			/**
			 * once the view is rendered, bind a change event to trigger a "search:DidType" event from
			 * the view
			 */
			var change_callback = function () {
				var val  = $("#search",self.el).val();
				var type = "";
				if (self.cell_lines.indexOf(val) != -1 && self.match_cell_lines){
					type = "cell";
				}

				/**
				 * Fired when the text in the view's search box changes
				 * @event search:DidType
				 * @param {Object} [msg={val:"",type:""}] an object containing the message of the event
				 * @param {String} [msg.val=""] the string val of the views search bar at the time of
				 *                              the event
				 * @param {String} [msg.type=""] the type of message being passed, either "" or "cell"
				 *                               "cell"is passed, if the string matches a cell line and
				 *                               match\_cell\_lines is set
				 */
				self.trigger("search:DidType",{val: val,search_column: undefined});
			};

			$("#search",self.el).bind('input propertychange change', _.throttle(change_callback,500));

			// bind a search:DidType event to the typeahead events coming out of typeahead.js
			$(".typeahead",self.el).bind('typeahead:selected typeahead:autocompleted', function (obj,datum) {
				var val = datum.value;
				var search_column = datum.search_column;
				self.trigger("search:DidType",{val: val,search_column: search_column});
			});
		});

	},

    /**
     * Gets the current text entered in the view's search bar
     */
	get_val: function(){
		return $("#search",this.el).val();
	},

	/**
	 * fills the view's search bar with a random pert_iname and triggers a "search:DidType" event
    */
	random_val: function(){
		var self = this;
		var cellinfo = Barista.APIURL + '/a2/cellinfo?callback=?';

		var skip = Math.round(Math.random()*40);
		var params = {q:'{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]}}', l:1, sk:skip};
		$.getJSON(cellinfo,params,function(res){
			var val = res[0].cell_id;
			$("#search",this.el).val(val);
			self.trigger("search:DidType",{val: val,search_column: 'cell_id'});
		});
	},
/**
 * triggers a "search:DidType" event for the given search value
 * @param {} new_val value to search for
 */
	set_val: function(new_val){
		$("#search",this.el).val(new_val);
		this.trigger("search:DidType",{val: new_val,search_column: undefined }); //TODO need to find search column info
	},

	/**
	 * renders the view
    */
	render: function(){
		var self = this;

		// load the template into the view's el tag
		this.$el.append(BaristaTemplates.CMapPertSearchBar({placeholder: this.placeholder}));

		// hook up the typeahead with backing datasets
		$('#search',this.$el).typeahead([Barista.Datasets.CellID,
										 Barista.Datasets.CellLineage,
										 Barista.Datasets.CellHistology,
										 Barista.Datasets.CellMutation]);
	}
});
