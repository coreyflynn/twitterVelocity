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

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Cellular Contexts available
 * in the Connectivity Map
 * CellIDDataset is typically not used directly, rather it's content is extracted from Barista.Datasets
 * in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellID:
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
			name: 'CellID',

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
				replace: function(url, query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_id":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('')
				} ,

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract cell id from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_id and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_id);
						object_map[element.cell_id] = element;
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
							type: 'Cell ID',
							search_column: 'cell_id',
							color: '#CC79A7',
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

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Cellular Contexts available
 * in the Connectivity Map
 * CellLineageDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellLineage:
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
			name: 'CellLineage',

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
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_lineage":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('');
				} ,

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract cell lineage from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_lineage and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_lineage);
						object_map[element.cell_lineage] = element;
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
							type: 'Cell Lineage',
							search_column: 'cell_lineage',
							color: '#DDA6C4',
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

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Perturbation IDs available
 * in the Connectivity Map
 * CompoundPertINameDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ CompoundPertIName:
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
			name: 'CompoundPertIName',

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
  					* set the remote data source to use pertinfo with custom query params
  					* @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
  					*/ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":"trt_cp"}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract pert_iname from
				 */
				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
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
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
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
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Perturbation IDs available
 * in the Connectivity Map
 * GeneticPertINameDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ GeneticPertIName:
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
			name: 'GeneticPertIName',

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
  					* set the remote data source to use pertinfo with custom query params
  					* @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
  					*/ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":{"$in":["trt_sh","trt_oe","trt_oe.mut"]}}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract pert_iname from
				 */
				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
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
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
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
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for job IDs available in the
 * Connectivity Map
 * JobIDDataset is typically not used directly, rather it's content is extracted from Barista.Datasets in
 * views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
    { JobID:
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
            name: 'JobID',

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
                    * set the remote data source to use compute_status with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
                    *                          from function
                    * @param  {string}  query  custom query
                    */ 
                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"job_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"job_id":1}'].join('');
                },

                dataType: 'jsonp',
        /**
         * returns the processed list of data for the autocomplete
         * @param {array} response  array of data to extract job id from
         */
        filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.job_id);
                        object_map[element.job_id] = element;
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
                            type: 'Job',
                            search_column: 'job_id',
                            color: '#BDBDBD',
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

/**
 * An object that extends Barista.Datasets to specify a backing dataset for job IDs available in the
 * Connectivity Map
 * JobNameDataset is typically not used directly, rather it's content is extracted from Barista.Datasets 
 * in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
    { JobName:
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
            name: 'JobName',

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
                    * set the remote data source to use compute_status with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
                    *                          from function
                    * @param  {string}  query  custom query
                    */ 
                remote: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"params.rpt":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"job_id":1}'].join('');
                },

                dataType: 'jsonp',
        /**
         * returns the processed list of data for the autocomplete
         * @param {array} response  array of data to extract job id from
         */
        filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.params.rpt);
                        object_map[element.params.rpt] = element;
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
                            type: 'Job Name',
                            search_column: 'params.rpt',
                            color: '#77A2A6',
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

/**
 * An object that extends Barista.Datasets to specify a backing dataset for job Statuses available in the
 * Connectivity Map
 * JobStatusDataset is typically not used directly, rather it's content is extracted from Barista.Datasets 
 * in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
    { JobStatus:
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
            name: 'JobStatus',

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
                    * set the remote data source to use compute_status with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
                    *                          from function
                    * @param  {string}  query  custom query
                    */ 
                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"status":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"status":1}'].join('')
                },

                dataType: 'jsonp',
                      /**
         * returns the processed list of data for the autocomplete
         * @param {array} response  array of data to extract status from
         */
        filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its status and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.status);
                        object_map[element.status] = element;
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
                            type: 'Status',
                            search_column: 'status',
                            color: '#B14A4E',
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

/**
 * An object that extends Barista.Datasets to specify a backing dataset for PRISM Perturbation IDs available
 * in the Connectivity Map
 * PRISMPertINameDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ PRISMPertIName:
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
			name: 'PRISMPertIName',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: #8387e6">PRISM</span><span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

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
					return [Barista.APIURL + '/prism/v1/profileinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}}',
						'&f={"pert_iname":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('')
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

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Perturbation IDs available in
 * the Connectivity Map
 * PertINameDataset is typically not used directly, rather it's content is extracted from Barista.Datasets
 * in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ PertIName:
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
			name: 'PertIName',

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
                    * set the remote data source to use pertinfo with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
                    */ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract pert_iname from
				 */
				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
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
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
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
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Tool IDs available in the
 * Connectivity Map
 * ToolIDDataset is typically not used directly, rather it's content is extracted from Barista.Datasets in
 * views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
    { ToolID:
            {
            /**
             * only return 6 items at a time in the autocomplete dropdown
             */
            limit: 6,

            /**
             * provide a name for the default typeahead data source
             * @type {String}
             */
            name: 'ToolID',

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
                    * set the remote data source to use compute_status with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
                    *                          from function
                    * @param  {string}  query  custom query
                    */ 
                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"tool_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"tool_id":1}'].join('');
                },

                dataType: 'jsonp',
                        /**
         * returns the processed list of data for the autocomplete
         * @param {array} response  array of data to extract tool id from
         */
        filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its tool_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.tool_id);
                        object_map[element.tool_id] = element;
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
                            type: 'Tool',
                            search_column: 'tool_id',
                            color: '#005CF2',
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

/**
 * An object that extends Barista.Datasets to specify a backing dataset for user IDs available in the
 * Connectivity Map
 * UserIDDataset is typically not used directly, rather it's content is extracted from Barista.Datasets in
 * views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
    { UserID:
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
            name: 'UserID',

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
                    * set the remote data source to use compute_status with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
                    *                          from function
                    * @param  {string}  query  custom query
                    */ 
                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"user_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"user_id":1}'].join('');
                },

                dataType: 'jsonp',
        /**
         * returns the processed list of data for the autocomplete
         * @param {array} response  array of data to extract job id from
         */
        filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.user_id);
                        object_map[element.user_id] = element;
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
                            type: 'Username',
                            search_column: 'user_id',
                            color: '#B348DA',
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
