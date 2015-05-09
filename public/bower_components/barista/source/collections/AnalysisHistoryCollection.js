/**
 * A Backbone.Collection that represents a set of analysis history objects
 * This collection is suitable for internal use in GridView
 * optional arguments:
 * @param {Backbone.model} model      the model used for the collection objects, defaults to PertModel
 * @param {string}         url        the url from which model data is fetched, defaults  to
 *                                    '//api.lincscloud.org/a2/pertinfo?callback=?'
 * @param {string}         skip       the skip parameter used in api calls when the collection is updated
 *                                    defaults to 0
 * @param {boolean}        isLoading  indicates wether or not the collection is in the middle of a fetch
 *                                    operation, defaults to false
 */

Barista.Collections.AnalysisHistoryCollection = Backbone.Collection.extend({
    /**
     * fetch model data from assigned url
     */
    initialize: function(){
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/compute_status?callback=?';
    },

    /**
     * the model used for the collection objects
     */
    model: Barista.Models.AnalysisHistoryModel,

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
     * the user_id to search jobs for
     * Forcing this to be set prevents us from searching other users jobs
     * @type {string}
     */
    user: undefined,

  /**
   * Gets additional data from the specified url and stores them as models in the collection
   * `AnalysisHistoryCollection.getData(search_string,search_type,limit)`
   * the count and pert_types data is replaced with new data coming from the api call
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

        // set up the query parameter for user_id
        var user_q = "";
        if (self.user){
            user_q = '"user_id":"' + self.user + '",';
        }
        switch (search_type){
        case "job_id":
            this.q_param = '{' + user_q + '"job_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        case "status":
            this.q_param = '{' + user_q + '"status":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        case "tool_id":
            this.q_param = '{' + user_q + '"tool_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        case "job_name":
            this.q_param = '{' + user_q + '"params.rpt":"' + search_string + '","status":{"$ne":"deleted"}}';
            break;
        case "user_id":
            this.q_param = '{' + user_q + '"user_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        default:
            this.q_param = '{' + user_q + '"job_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
        }


        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            sk: this.skip,
            s: '{"_id":-1}'};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set isLoading back to false
        // and resolve a deferred that we set up as a return value
        var def = $.Deferred();
        $.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
            def.resolve();
        });

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount == Infinity){
            params = _.omit(params,['l','sk','s']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }

        return def;
    }
});
