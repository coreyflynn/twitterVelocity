/**
 * An object that extends Barista.Datasets to specify a backing dataset for Cellular mutation
 * annotations available in the Connectivity Map
 * CellMutationDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellMutation:
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
			name: 'CellMutation',

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
				url: '',
				  /**
  					* set the remote data source to use cellinfo with custom query params
  					* @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
  					*/ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]}}',
						'&d=mutations'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract mutation data from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = response;

					// filter the list based on the query.  self comes from the closure in the view that calls the
					// dataset. It shold be a reference to the view that is consuming the dataset.  That view should
					// have a typeahead elment in it somewhere
					var re = new RegExp($(".typeahead",self.div_string).val(),"i");
					auto_data = _.filter(auto_data,function(mutation){return re.test(mutation);});

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: item
						}
						_.extend(datum,{
							type: 'Cell Mutation',
							search_column: 'mutations',
							color: '#999999',
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
