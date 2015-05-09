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
