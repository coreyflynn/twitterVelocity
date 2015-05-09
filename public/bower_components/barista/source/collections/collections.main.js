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

/**
 *  pert_collection = new CellCollection({model: PertModel,
                                           url: Barista.APIURL + '/a2/pertinfo?callback=?',
                                           skip: 0,
                                           isLoading: false});
 *                                          
 * A Backbone.Collection that represents a set of cell types
 * This collection is suitable for internal use in GridView
 * optional arguments:
 * @param {Backbone.model} model      the model used for the collection objects, defaults to *PertModel*
 * @param {string}         url        the url from which model data is fetched, defaults to
 *                                    '//api.lincscloud.org/a2/pertinfo?callback=?'
 * @param {string}         skip       the skip parameter used in api calls when the collection is updated,
 *                                    defaults to 0
 * @param {boolean}        isLoading  indicates wether or not the collection is in the middle of a fetch
 *                                    operation, defaults to false`
 */

Barista.Collections.CellCollection = Backbone.Collection.extend({
    /**
     * fetch model data from assigned url
     */
    initialize: function(){
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/a2/cellinfo?callback=?';
    },

    /**
     * the model used for the collection objects
     */
    model: Barista.Models.CellModel,

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
   * Gets additional data from the specified url and stores them as models in the collection
   * the count and pert_types data is replaced with new data coming from the api call
   * `PertCollection.getData(search_string,search_type,limit)`
   * @param  {string}  search_string  the string on which a regex search into the api at the collections
   *                                  url will be performed, defaults to ""
   * @param  {string}  search_type    the type of search that will be performed, defaults to "single"
   * @param  {number}  limit          the number of models to be fetched, defaults to 30
   */
    getData: function(search_string,search_column,limit){
        var self = this;
        // set isLoading to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_column = (search_column !== undefined) ? search_column : 'cell_id';
        //TODO big hack to adapt to GridView implementation
        if (this.search_column == 'single') {
          this.search_column = 'cell_id';
        }
        // this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        if (this.search_column == 'mutations'){
            this.q_param = '{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"mutations":"' + this.search_string + '"}';
        }else{
            this.q_param = '{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"' + this.search_column + '":' + '{"$regex":"^' + this.search_string + '","$options":"i"}}';
        }

        // build a parameter object for the api call
        // TODO-remove: alert(this.q_param);
        var params = {q: this.q_param,
            l: this.limit,
            // s: this.s_param, // no sorting yet
            sk: this.skip};

        $.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
            self.trigger("fetch");
        });
    }
});

/**
 *        pert_collection = new PertCollection({model: PertModel,
 *                                         url: Barista.APIURL + '/a2/pertinfo?callback=?',
 *                                         skip: 0,
 *                                         isLoading: false});
 *                                         
 * A Backbone.Collection that represents an arbitrary set of objects stored in a JSON file
 * The JSON file is assumed to contain a top level array containing objects
 * Each object in the array is modeled as a base Backbone.Model inside of the collection
 * optional arguments:
 * @param {Backbone.model} model      the model used for the collection objects, defaults to *PertModel*
 * @param {string}         url        the url from which model data is fetched, defaults  to
 *                                    '//api.lincscloud.org/a2/pertinfo?callback=?'
 * @param {string}         skip       the skip parameter used in api calls when the collection is updated
 *                                    defaults to 0
 * @param {boolean}        isLoading  indicates wether or not the collection is in the middle of a fetch
 *                                    operation. defaults to false
 */
Barista.Collections.GenericJSONCollection = Backbone.Collection.extend({
    /**
     * the model used for collection objects
     */
	model: Barista.Models.PertModel,

    /**
     * the url from which model data is fetched
     * @type {String}
     */
    url: 'data.json',

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
   * `GenericJSONCollection.getData(search_string,search_type,limit)`
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

        // fetch data from the given url.  If the url attribute is a string, fetch data via an ajax
        // request. Read each returned item in the response into a new PertModel.  If it is an object, 
        // assume it is an array of data and read each array item into a new PertModel
        if (typeof(this.url) == 'object'){
            this.url.forEach(function(o){self.add(new Barista.Models.PertModel(o));});
            // set the collection's maxCount attribute to the length of the collection
            this.maxCount = this.models.length;
        }else{
            $.getJSON(this.url,function(res){
                res.forEach(function(o){
                    self.add(new PertModel(o));
                });
                // set the collection's maxCount attribute to the length of the collection
                this.maxCount = this.models.length;
            });
        }
	}
});
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

/**
 * `pert_collection = new SignatureCollection({model: PertModel,
 *                                         // url: Barista.APIURL + '/a2/siginfo?callback=?',
 *                                         // skip: 0,
 *                                         // isLoading: false});`
 *                                         
 * A Backbone.Collection that represents a set of signatures
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

Barista.Collections.SignatureCollection = Backbone.Collection.extend({
    /**
     * fetch model data from assigned url
     */
    initialize: function(){
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/a2/siginfo?callback=?';
    },

    /**
     * the model used for the collection objects
     */
    model: Barista.Models.SignatureModel,

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
     * boolean flag telling the collection to only include gold Connectivity Map signatures
     * @type {Boolean}
     */
    gold_only: true,

  /**
   * Gets additional data from the specified url and stores them as models in the collection
   * the count and pert_types data is replaced with new data coming from the api call
   * `SignatureCollection.getData(search_string,search_type,limit)`
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
        this.search_string = (search_string !== undefined) ? search_string : "";
        this.search_type = (search_type !== undefined) ? search_type : "";
        this.limit = (limit !== undefined) ? limit : 30;

        // depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell_ids
        if (search_type === "single" || search_type === ""){
            if (this.gold_only){
                this.q_param = '{"pert_id":"' + search_string + '","is_gold":1}';
            }else{
                this.q_param = '{"pert_id":"' + search_string + '"}';
            }
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            if (this.gold_only){
                this.q_param = '{"pert_id":{"$in":"' + search_string + '"},"is_gold":1,"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
            }else{
                this.q_param = '{"pert_id":{"$in":"' + search_string + '"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
            }
        }
        if (search_type === "cell"){
            if (this.gold_only){
                this.q_param = '{"cell_id":"' + search_string + '","is_gold":1}';
            }else{
                this.q_param = '{"cell_id":"' + search_string + '"}';
            }
        }

        // set up the sorting paramter for the api call
        this.s_param = '{"pert_id":1}';

        // set up a filtering parameter for the api call
        this.f_param = '{"pert_id":1,"pert_type":1,"pert_iname":1,"pert_itime":1,"pert_idose":1,"cell_id":1,"sig_id":1,"is_gold":1,"distil_ss":1,"distil_cc_q75":1,"ngenes_modulated_dn_lm":1,"ngenes_modulated_up_lm":1}';

        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: this.s_param,
            f: this.f_param,
            sk: this.skip};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set isLoading back to false
		var getData_promise = $.getJSON(this.url, params, function(res){
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

        // return the getData_promise for use with downstream functions if we want
        return getData_promise;
    }
});

/**
 * pert_collection = new PertCollection({model: PertModel,
 *                                         url: Barista.APIURL + '/a2/pertinfo?callback=?',
 *                                         skip: 0,
 *                                         isLoading: false});
 *                                         
 * A Backbone.Collection that represents a set of CMap Summly results
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

Barista.Collections.SummlyResultCollection = Backbone.Collection.extend({
    /**
     * fetch model data from assigned url
     */
	initialize: function(){
		// the url from which model data is fetched
		this.url =  Barista.APIURL + '/a2/pertinfo?callback=?';
	},

    /**
     * the model used for collection objects
     */
	model: Barista.Models.SummlyResultModel,

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
        this.search_string = search_string;
        this.search_type = search_type;
        this.limit = (limit !== undefined) ? limit : 30;

		// depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell_ids
        if (search_type === "single" || search_type === undefined){
            this.q_param = '{"pert_iname":{"$regex":"' + "" + '","$options":"i"}}';
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            this.q_param = '{"pert_iname":{"$in":"' + search_string + '"}}';
        }

		// build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: '{"num_gold":1}',
            sk: Math.round(Math.random() * (40000 - 30))};

		// make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set isLoading back to false
		$.getJSON(this.url,params,function(res){
			var data = [];
			var cell_lines = ["ASC","HA1E","HCC515","NEU","NPC","PHH","SKL",
							"MCF7","HEPG2","VCAP","A549","A375","HT29","PC3"];
			res.forEach(function(o){
				var random_lines = cell_lines.slice(0, Math.round(Math.random()*14) + 1);
				var random_line_scores = {};
				random_lines.forEach(function(line){
					random_line_scores[line] = [Math.random()*2 - 1];
				});
				data.push({query: search_string,
							target: o.pert_iname,
							pert_type: o.pert_type,
							summly_score: Math.random(),
							summly_rank: Math.random(),
							specificity: Math.random(),
							cell_line_scores: random_line_scores});
			});
			self.add(data);
			self.isLoading = false;
		});

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount < Infinity){
            params = _.omit(params,['l','s','f','sk']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }
    }
});
