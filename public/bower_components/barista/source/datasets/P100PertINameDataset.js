/**
 * An object that extends Barista.Datasets to specify a backing dataset for P100 Perturbation IDs available
 * in the Connectivity Map
 * P100PertINameDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ P100PertIName:
			{
			/**
			 * only return 6 items at a time in the autocomplete dropdown
			 * @type {Number}
			 */
			limit: 6,

			/**
			 * provide a name for the default typeahead data source
			 * @type {String}
			 */
			name: 'P100PertIName',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: #7bd9e4">P100</span><span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			/**
			 * use twitter's hogan.js to compile the template for the typeahead results
			 */
			engine: Hogan,

			remote: {
				url: '',
                  /**
                    * set the remote data source to use profileinfo with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
                    */ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['//prefix:8080/p100/v1/profileinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}}',
						'&f={"pert_iname":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract pert_iname from
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

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Chemical Reagent',
							color: '#E69F00',
						});
						datum_list.push(datum);
						return datum_list;
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);
