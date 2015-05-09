/**
 * `pert_collection = new PertCollection({model: PertModel,
 *                                         // url: Barista.APIURL + '/a2/pertinfo?callback=?',
 *                                         // skip: 0,
 *                                         // isLoading: false});`
 *                                         
 * A Backbone.Collection that represents a set of perturbagens
 * This collection is suitable for internal use in GridView
 * optional arguments:
 * @param {Backbone.model} model      the model used for the collection objects, defaults to *PertModel*
 * @param {string}         url        the url from which model data is fetched, defaults  to
 *                                    '//api.lincscloud.org/a2/pertinfo?callback=?'
 * @param {string}         skip       the skip parameter used in api calls when the collection is updated,
 *                                    defaults to 0
 * @param {boolean}        isLoading  indicates wether or not the collection is in the middle of a fetch
 *                                    operation, defaults to false
 */

Barista.Collections.PertCollection = Backbone.Collection.extend({
    /**
     * fetch model data from assigned url
     */
    initialize: function(){
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/a2/pertinfo?callback=?';
    },

    /**
     * the model used for the collection objects
     */
    model: Barista.Models.PertModel,

    /**
     * the skip parameter used in api calls when the collection is updated
     * @type {Number}
     */
    skip: 0,

    /**
     * indicates wether or not the collection is in the middle of a fetch operation
     * @type {Boolean}
     */
    isLoading: false,

    /**
     * the maximum size of the collection
     * defaults to Infinity
     * @type {Number}
     */
    maxCount: Infinity,

  /**
   * Gets additional data from the specified url and stores them as models in the collection
   * the count and pert_types data is replaced with new data coming from the api call
   * `PertCollection.getData(search_string,search_type,limit)`
   * @param  {string}  search_string  the string on which a regex search into the api at the collections
   *                                  url will be performed, defaults to ""
   * @param  {string}  search_type    the type of search that will be performed, defaults to "single"
   * @param  {number}  limit          the number of models to be fetched, defaults to 30
   */
    getData: function(search_string,search_type,limit){
        var self = this;
        // set isLoading to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of search_string, search_type, and limit on the collection object
        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        // depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell\_ids
        if (search_type === "single" || search_type === undefined){
            this.q_param = '{"pert_iname":{"$regex":"^' + search_string + '","$options":"i"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            this.q_param = '{"pert_iname":{"$in":"' + search_string + '"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
        }
        if (search_type === "cell"){
            this.q_param = '{"cell_id":"' + search_string + '"}';
        }

        // set up the sorting paramter for the api call
        this.s_param = '{"pert_iname":1}';

        // set up a filtering parameter for the api call
        this.f_param = '{"pert_iname":1,"pert_type":1,"pert_id":1,"num_sig":1}';

        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: this.s_param,
            f: this.f_param,
            sk: this.skip};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set isLoading back to false
		$.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
        });

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount == Infinity){
            params = _.omit(params,['l','s','f','sk']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }
    }
});
