/**
 * An object that extends Barista.Datasets to specify a backing dataset for Cellular Contexts available
 * in the Connectivity Map
 * CellHistologyDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ 	CellHistology:
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
			name: 'CellHistology',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			/**
			 * use twitter's hogan.js to compile the template for the typeahead results
			 */
			engine: Hogan,

			remote: {
				url: "",
				  /**
  					* set the remote data source to use cellinfo with custom query params
  					* @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
  					*/ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_histology":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract cell histology from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_histology and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_histology);
						object_map[element.cell_histology] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Cell Histology',
							search_column: 'cell_histology',
							color: '#BB4D8A',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);
