/**
 * A Backbone.View that exposes a custom search bar.  The search bar provides autocomplete
 * functionality for Connectivity Map pert\_inames and cell\_ids.  When the user types in the
 * search view's input, a "search:DidType" event is fired.
 * @class PertSearchBar
 * @constructor
 * @extends Backbone.View
*/
Barista.Views.CompoundSearchBar = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "CompoundSearchBar",
/**
 * overrides the default Backbone.View initialize method
 */
	initialize: function(){
		var self = this;
		this.render();

		// once the view is rendered, bind a change event to trigger a "search:DidType" event from the view
		var change_callback = function () {
			var val  = $("#search",self.el).val();
			var type = "";
			/**
			 * Fired when the text in the view's search box changes
			 * @event search:DidType
			 * @param {Object} [msg={val:"",type:""}] an object containing the message of the event
			 * @param {String} [msg.val=""] the string val of the views search bar at the time of the event
			 * @param {String} [msg.type=""] the type of message being passed, either "" or "cell". "cell" is passed, if the string matches a cell line and match\_cell\_lines is set
			 */

			self.trigger("search:DidType",{val: val,type: type});
		};

		$("#search",self.el).bind('input propertychange change', _.throttle(change_callback,500));

		// bind a search:DidType event to the typeahead events coming out of typeahead.js
		$(".typeahead",self.el).bind('typeahead:selected typeahead:autocompleted', function (obj,datum) {
			var val = datum.value;
			var type = "single";
			self.trigger("search:DidType",{val: val,type: type});
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
		skip = Math.round(Math.random()*40000);
		var pertinfo = Barista.APIURL + '/a2/pertinfo?callback=?';
		params = {q: '{"pert_type":"trt_cp"}',
					f:'{"pert_iname":1}',
										l:1,
										sk:skip};
		$.getJSON(pertinfo,params,function(res){
			var val = res[0].pert_iname;
			$("#search",this.el).val(val);
			self.trigger("search:DidType",{val: val,type: 'single'});
		});
	},
/**
 * triggers a "search:DidType" event for the given search value
 * @param {string} new_val  value to search for
 */
	set_val: function(new_val){
		$("#search",this.el).val(new_val);
		this.trigger("search:DidType",{val: new_val,type: 'single'});
	},

	/**
	 * renders the view
    */
	render: function(){
		var self = this;
		// load the template into the view's el tag
		this.$el.append(BaristaTemplates.CMapPertSearchBar());

		$('#search',this.$el).typeahead([{
			// only return 4 items at a time in the autocomplete dropdown
			limit: 2,

			// provide a name for the default typeahead data source
			name: 'Reagents',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use pertinfo with custom query params
				url: [Barista.APIURL + '/a2/pertinfo?',
					  'q={"pert_iname":{"$regex":"%QUERY", "$options":"i"}, "pert_type":"trt_cp"}',
					  '&f={"pert_iname":1,"pert_type":1}',
					  '&l=100',
					  '&s={"pert_iname":1}'].join(''),
				
				dataType: 'jsonp',

				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract cell id from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						};
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}

			}
		}]);
	}
});