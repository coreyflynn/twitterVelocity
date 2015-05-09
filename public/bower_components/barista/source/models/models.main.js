/**
 * `pert_model = new AnalysisHistoryModel()`
 * 
 * A Backbone.Model that represents an analysis history object.
 */
Barista.Models.AnalysisHistoryModel = Backbone.Model.extend({
    /**
     * Overides the base Model's initialize method to add the models date attribute and set the cid to the
     * mongo _id field
     * @todo these parameters are never used, consider removing from function
     * @param  {object}  attributes
     * @param  {object}  options
     */
    initialize: function(attributes, options) {
        this.cid = this.get('_id')
        this.set("date", new Date(parseInt(this.cid.substring(0,8), 16)*1000));
        this.set("rpt",this.get("params").rpt);
        if (this.get("status") === "completed"){
            this.set({view_result_link: '<a href="' + this.get("standard_result") + '"><i class="fa fa-eye"></i></a>'});
        }else{
            this.set({view_result_link: ''});
        }
        this.set({edit: '<i class="fa fa-times-circle cmap-grid-delete-button" onclick="Backbone.trigger(' + "'AnalysisHistoryModel:delete'" + ',' + "'" +  this.get("job_id") + "'" + ')"></i>'});
  }
});

/**
 * A Backbone.Model to hold the information needed to make a simple bar plot
 * The model includes a title, axis title, data, data_labels, and an optional object for metadata on the
 * points in the data
 * The meta data object should contain attributes for each meta data category and an array of values
 * matching the size of the points in the data
 * 
 * for example:
 * meta_data = {'dose: [1,2,3]', timepoint: ['6H','6H','6H']}

   usage:

		summly_result = new SummlyResultModel();
 */
Barista.Models.BarPlotModel = Backbone.Model.extend({
	/**
	 * set of model defaults
	 * @param {string}  title        the title of the plot, defaults to ""
	 * @param {string}  axis_title   the title of the x_axis, defaults to ""
	 * @param {array}   data         an array of data for the x_axis, defaults to []
	 * @param {array}   data_labels  an array of data for the y_axis, defaults to []
	 * @param {object}  meta_data    object containing meta data for the points in the plot,
	 *                               defaults to {}
	 */
	defaults: {
		title: "",
		axis_title: "",
		data: [],
		data_labels: [],
		meta_data: {}
	}
});

/**
 * `cell_count_model = new CellCountModel({type_string: '["trt_sh","trt_oe"]'})`
 * 
 * A Backbone.Model that represents the count of a set of cell_lines
 * The data model captures both the total count of cell lines that meet a search criteria and the count of
 * each annotation category for the set of cell lines
 * optional arguments:
 * @param {string} type_string  the string of pert_types that will be search upon fetching data, defaults
 *                              to '["trt_sh","trt_oe"]'
 */
Barista.Models.CellCountModel = Backbone.Model.extend({
  /**
   * describes the model's default parameters
   * @param {number} count        the number of perturbagens matching an api query, defaults to 0
   * @param {array}  pert_types   an array of objects representing pert\_type categories to keep track of,
   *                              defaults to [{}}]
   * @param {date}   last_update  a timestamp of the latest model update, defaults to the current time
   */
  defaults: {
    count: 0,
    pert_types: [{}],
    g: "cell_type",
    last_update: (new Date()).getTime()
  },

  /**
   * fetches new data from the cell_info api
   * the count and pert_types data is replaced with new data coming from the api call
   * @param  {string}  search_string  value to search for
   * @param  {string}  search_type    one of 'multi', 'single', or 'cell'
   */
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the pert_params for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell_ids
    var sig_info = Barista.APIURL + '/a2/siginfo?callback=?';
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var cell_info = Barista.APIURL + '/a2/cellinfo?callback=?';
    var params = {};
    if (search_type === "multi"){
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      pert_params = {q:'{"pert_iname":{"$in":' + search_string + '},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}', d:"cell_id"};
    }
    if (search_type === "single" || search_type === undefined){
      pert_params = {q:'{"pert_iname":{"$regex":"^' + search_string + '","$options":"i"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}', d:"cell_id"};
    }
    if (search_type === "cell") {
      pert_params = {q:'{"cell_id":"' + search_string + '"}', f:'{"cell_id":1}', l:1};
    }

    // run the api request to get the total count of cell lines.
    var self = this;
    var num_perts;
    var t = (new Date()).getTime();
    // if the search type is a "cell", leverage siginfo and cellinfo apis
    if (search_type === "cell") {
      $.getJSON(sig_info,pert_params,function(sig_res) {
        // if there is no reponse, set pert_count: num_perts and pert_types: [{}]
        if (sig_res === 0){
          num_perts = 0;
          self.set({count: num_perts, pert_types: [{}], last_update: t});
        }else{
          // if there is a reponse, update *pert\_count* and *pert\_types*
          num_perts = sig_res.length;
          var cell_lines = '["' + sig_res.join('","') + '"]';
          var cell_params = {q:'{"cell_id":"' + search_string + '"}', g:"cell_type"};
          $.getJSON(cell_info,cell_params,function(cell_res){
            self.set({count: num_perts, pert_types: cell_res, last_update: t});
          });
        }
      });
    }else{
        // if the search type is not "cell", leverage the pertinfo api
        $.getJSON(pert_info,pert_params,function(pert_res) {
        if (pert_res === 0){
          // if there is no reponse, set pert_count: num_perts and pert_types: [{}]
          num_perts = 0;
          self.set({count: num_perts, pert_types: [{}], last_update: t});
        }else{
          // if there is a reponse, update pert_count and pert_types
          num_perts = pert_res.length;
          var cell_lines = '["' + pert_res.join('","') + '"]';
          var cell_params = {q:'{"cell_id":{"$in":' + cell_lines + '}}', g:self.get("g")};
          $.getJSON(cell_info,cell_params,function(cell_res){
            self.set({count: num_perts, pert_types: cell_res, last_update: t});
          });
        }
      });
     }
  }
});

/**
 * `pert_model = new CellModel()`
 * 
 * A Backbone.Model that represents a cell line
 */
Barista.Models.CellModel = Backbone.Model.extend({
	/**
	 * Overides the base Model's initialize method to set the model's cid to the cell_id of the perturbagen
	 * @todo these parameters are never used, consider removing from function
	 * @param  {string}  attributes
	 * @param  {string}  options
	 */
	initialize: function(attributes, options) {
		this.cid = this.get('cell_id');
  }
});

/**
 * `pert_detail_model = new CompoundDetailModel()`
 * 
 * A Backbone.Model that represents a single compound's description
 * The data model captures a number of fields including
 */

Barista.Models.CompoundDetailModel = Backbone.Model.extend({
  /**
   * describes the model's default parameters
   * @param {string} pert_id       the compound's perturbagen identifier
   * @param {string} pert_iname    the compound's standardized name
   * @param {string} pert_summary  a short description of the compound
   * @param {string} pubchem_cid   the PubChem identifier associated with the compound
   * @param {string} wiki_url      wikipedia url
   */

  defaults: {
    pert_id: "",
    pert_iname: "",
    pert_summary: null,
    pubchem_cid: null,
    wiki_url: null,
    molecular_formula: null,
    molecular_wt: null,
    pert_vendor: null,
    num_gold: 0,
    num_sig: 0,
    cell_id: [],
    inchi_key: "",
    structure_url: ""
  },

  /**
   * fetches new data from the pert_info api
   * @param  {string}  search_string  value to search for
   */
  fetch: function(search_string){
    // set up a deferred object that can be used by outside functions.  This deferred will be
    // resolved with the contents of the model attributes
    var deferred = $.Deferred();

    // set up the api parameters to make a regular expression matched query against
    // pert_inames in pertinfo and retrieve the first result's pert_iname and pert_desc
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = params = {q:'{"pert_type":"trt_cp","pert_iname":{"$regex":"^' + search_string + '", "$options":"i"}}',
                          l:1};

    // run the api request.  If the search string is "", set the short and long
    // description to undefined and trigger a "CompoundDetailModel:ModelIsNull" event.
    // Otherwise, retrive the pert_iname and pert_desc of the response and set
    // them to the model and trigger a "CompoundDetailModel:ModelIsNotNull" event
    var self = this;
    $.getJSON(pert_info,params,function(perts) {
      if (perts == 0 || search_string == ""){
        self.set({pert_id: "",
                  pert_iname: "",
                  pert_summary: null,
                  pubchem_cid: null,
                  wiki_url: null,
                  molecular_formula: null,
                  molecular_wt: null,
                  pert_vendor: null,
                  num_gold: 0,
                  num_sig: 0,
                  cell_id: [],
                  inchi_key: "",
                  structure_url: ""})
        self.trigger("CompoundDetailModel:ModelIsNull");
      }else{
        //   set all fields on the model
        self.set(perts[0]);

        // grab the wikipedia link if it is there
        var wiki_url = null;
        if (perts[0].pert_url){
          var links = perts[0].pert_url.split(',');
          var wiki_re = /wikipedia/
          links.forEach(function(link){
            if (wiki_re.exec(link)){
              wiki_url = link;
            }
          });
        }

        // grab the PubChem ID if it is there.
        var pubchem_cid = null;
        if (perts[0].pubchem_cid){
          pubchem_cid = perts[0].pubchem_cid;
        }

        // grab the pert summary if it is there
        var pert_summary = null;
        if (perts[0].pert_summary){
          pert_summary = perts[0].pert_summary;
        }

        // grab the sstructure_url if it is there and there is a pubchem_cid (i.e. it is public).
        var structure_url = null;
        if (perts[0].structure_url && pubchem_cid){
          structure_url = perts[0].structure_url;
        }

        // set the fields on the model
        self.set({pert_id: perts[0].pert_id,
                  pert_iname: perts[0].pert_iname,
                  pert_summary: pert_summary,
                  pubchem_cid: pubchem_cid,
                  wiki_url: wiki_url,
                  molecular_formula: perts[0].molecular_formula,
                  molecular_wt: perts[0].molecular_wt,
                  pert_vendor: perts[0].pert_vendor,
                  num_gold: perts[0].num_gold,
                  num_sig: perts[0].num_sig,
                  cell_id: perts[0].cell_id,
                  inchi_key: perts[0].inchi_key,
                  structure_url: structure_url,
                  last_update: (new Date()).getTime()});

        // trigger an event to tell us that the model is not null
        self.trigger("CompoundDetailModel:ModelIsNotNull");
      }
      deferred.resolve(self.attributes);
    });
    return deferred;
  }
});

/**
 * `pert_detail_model = new GeneDetailModel()`
 * 
 * A Backbone.Model that represents a single compound's description
 * The data model captures a number of fields including
 */

Barista.Models.GeneDetailModel = Backbone.Model.extend({
    /**
   * describes the model's default parameters
   * @param {string} pert_id       the compound's perturbagen identifier
   * @param {string} pert_iname    the compound's standardized name
   * @param {string} pert_summary  a short description of the compound
   * @param {string} pubchem_cid   the PubChem identifier associated with the compound
   * @param {string} wiki_url      wikipedia url
   */

  defaults: {
    cell_id: [],
    clone_name: null,
    has_kd: false,
    has_oe: false,
    num_gold: null,
    num_inst: null,
    num_sig: null,
    oligo_seq: null,
    pert_id: null,
    pert_iname: null,
    pert_summary: null,
    seed_seq6: null,
    seed_seq7: null,
    sig_id: [],
    sig_id_gold: [],
    target_region: null,
    target_seq: null,
    vector_id: null
  },

  /**
   * kd specific model fields
   * @type {Array}
   */
  kd_fields: ['clone_name','oligo_seq','seed_seq6','seed_seq7','target_region','target_seq','vector_id'],

  /**
   * fields that are arrays
   * @type {Array}
   */
  array_fields: ['cell_id','sig_id','sig_id_gold'],

  /**
   * fetches new data from the pert_info api
   * All fields are replaced by the first item that matches the api search_string
   * @param  {string}  search_string  value to search for
   */
  fetch: function(search_string){
    // set up a deferred object that can be used by outside functions.  This deferred will be
    // resolved with the contents of the model attributes
    var deferred = $.Deferred();

    // set up the api parameters to make a regular expression matched query against
    // pert_inames in pertinfo
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = params = {
        q:'{"pert_type":{"$in":["trt_sh","trt_oe"]},"pert_iname":{"$regex":"^' + search_string + '", "$options":"i"}}',
        f:'{"pert_iname":1}',
        l:1
    };

    // get annotations for both KD and OE experiments of the matched gene name
    var self = this;
    $.getJSON(pert_info,params,function(perts) {
          if (perts == 0 || search_string == ""){
            // if there is no matched gene, go back to defaults
            self.set(self.defaults);
            self.trigger("GeneDetailModel:ModelIsNull");
          }else{
            // otherwise, populate the model with a combination of KD and OE annotations

            // set up the deferred objects for calls to the pertinfo API
            var search_string = perts[0].pert_iname;
            KD_deferred = self.fetch_pert_type(search_string,"trt_sh");
            OE_deferred = self.fetch_pert_type(search_string,"trt_oe");

            // act on the deferred objects once they are resolved
            $.when(KD_deferred,OE_deferred).done(function(kd_annots, oe_annots){
                if ( kd_annots === null && oe_annots === null ){
                    self.set(self.defaults);
                    self.trigger("GeneDetailModel:ModelIsNull");
                }else{
                    var annots = {pert_type:"gene"};
                    if (kd_annots === null){
                        annots.has_kd = false;
                        annots.has_oe = true;
                        self.set(_.extend(oe_annots.unprefixed,oe_annots.prefixed,annots));
                    }else if (oe_annots === null){
                        annots.has_kd = true;
                        annots.has_oe = false;
                        self.set(_.extend(kd_annots.unprefixed,kd_annots.prefixed,annots));
                    }else{
                        annots.has_kd = true;
                        annots.has_oe = true;
                        self.set(_.extend(kd_annots.unprefixed,kd_annots.prefixed,oe_annots.prefixed,annots));
                    }
                    // trigger an event to tell us that the model is not null
                    self.trigger("GeneDetailModel:ModelIsNotNull");
                }
                deferred.resolve(self.attributes);
            });
          }
        });
        return deferred;
    },

      /**
   * fetches new data from the pert_info API for the given pert_type
   * @param  {string}  search_string  value to search for
   * @param  {string}  pert_type      one of 'multi', 'single', or 'cell'
   */
    fetch_pert_type: function(search_string,pert_type){
        // set up a deferred object that we can use in the fetch function above
        var deferred = $.Deferred();

        // set up the api parameters to make an exact matched query against
        // pert_inames in pertinfo and retrieve the first result
        var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
        var params = params = {q:'{"pert_type":"'+ pert_type + '","pert_iname":"' + search_string + '"}',
                              l:1};

        // run the api request.  If the search string is "", resolve the generated promise
        // with a null value, otherwise resolve it with the returned pert annotations
        var self = this;
        $.getJSON(pert_info,params,function(perts) {
            if (perts == 0 || search_string == ""){
                deferred.resolve(null);
            }else{
                var annots = {};
                for (field in perts[0]){
                    annots[pert_type + '_' + field] = perts[0][field];
                }
                deferred.resolve({prefixed: annots, unprefixed: perts[0]});
            }
        });

        return deferred;
    }
});

/**
 * `generic_count_model = new GenericCountModel()`
 * 
 * A Backbone.Model that represents the count of a set CMap databbase items
 * The data model captures the total count of perturbagens that meet a search criteria
 * optional arguments:
 * @param {string} search_field  the document field the model with count over upon fetching data,
 *                               defaults to "pert_iname"
 * @param {string} url           the url of the api service to fetch data from, defaults to
 *                               "//api.lincscloud.org/a2/pertinfo"
 */

Barista.Models.GenericCountModel = Backbone.Model.extend({

  defaults:{
    count:0,

  },
  /**
   * custom initialization to make sure we have the correct url for jsonp
   */
  initialize:function(attrs){
    this.setListeners();
  },

/**
 * add description
 */
  setListeners: function() {
    var source = this.get('source');
    if (source) {
      this.listenTo(source,'update',function(){
        if(attrs.source.getCount(attrs.key)) {
          this.set('count',attrs.source.getCount(attrs.key));
        } else {
          this.set('count',0);
        }
      });
    };
  }
  
});

Barista.Models.GenericSourceModel = Backbone.Model.extend({

  /**
   * custom initialization to make sure we have the correct url for jsonp
   */
  initialize:function(attrs){
    this.setKey();
  },

/**
 * add description
 */
  setKey: function() {
    var key = this.get('key');
    this.url = 'http://10.125.171.42:8080/' + key;
  },

/**
 * add description
 * @param  {[type]} inputKey [description]
 */
  getCount:function(inputKey){
    return this.data[inputKey.group][inputKey.name];
  },

/**
 * add description
 */
  update:function(){
    var self = this;
    $.getJSON(this.url,function(data){
      self.data = data;
      self.trigger('update');
    })
  }
});


/**
 * `pert_model = new GenericMongoModel()`
 * 
 * A Backbone.Model that represents a generic MongoDB object
 * All fields in the document are passed to the model as normal and a date attribute is set from the _id
 * field of the mongo document
 */
Barista.Models.GenericMongoModel = Backbone.Model.extend({
    /**
	 * Overides the base Model's initialize method to add the models date attribute and set the cid to
   * the mongo _id field
   * @todo these parameters are never used, consider removing from function
	 * @param  {string}  attributes
	 * @param  {string}  options
	 */
    initialize: function(attributes, options) {
        this.cid = this.get('_id')
        this.set("date", new Date(parseInt(this.cid.substring(0,8), 16)*1000));
  }
});

/**
 * heatmap_model = new HeatmapModel({data: [[1,2],[3,4]],
											rid: ['1','2'],
											cid: ['1','2'],
											annots: ['1','2'],
											title: ""});
 *
 * A Backbone.Model that represents the data in a heatmap
 * The model contains a two dimensional array of numbers, row and columns labels, and a title
 * example usage:

 			heatmap_model = new HeatmapModel();
 * optional arguments:
 * @param {array}  data          the data object to use in the heatmap, defualts to [[1,2],[3,4]]
 * @param {array}  rid           the row labels to use in the heatmap, defualts to ['1','2']
 * @param {array}  cid           the column labels to use in the heatmap, defualts to ['1','2']
 * @param {array}  annots        optional annotations categories to show under the heatmap, defualts to
 *                               undefined
 * @param {array}  annote_label  optional label for annotations. defualts to undefined
 * @param {string} title         the title to use in the plot, defaults to ""
 */
Barista.Models.HeatmapModel = Backbone.Model.extend({
	/**
   * set up defaults for model values
   * @param {array}  data    the data object to use in the heatmap, defualts to [[1,2],[3,4]]
   * @param {array}  rid     the row labels to use in the heatmap, defualts to ['1','2']
   * @param {array}  cid     the column labels to use in the heatmap, defualts to ['1','2']
   * @param {array}  annots  optional annotations categories to show under the heatmap, defualts to
   *                         undefined
   * @param {string} title   the title to use in the plot, defaults to ""
   */
	defaults: {
		data: [[1,2],[3,4]],
		rid: ['1','2'],
		cid: ['1','2'],
		annots: undefined,
		title: "",
		last_update: (new Date()).getTime()
	}
})
/**
 * `pert_cell_breakdown_model = new PertCellBreakdownModel()`
 * 
 * A Backbone.Model that represents the cell line based breakdown of a set of perturbagens
 * the number of perturbagens matching a query is counted for each cell line
 * Data for all cell lines that contain a match to the query are represented in the model
 */
Barista.Models.PertCellBreakdownModel = Backbone.Model.extend({
      /**
   * describes the model's default parameters
   * @param {string} filter       the current filter to be used with api calls, defaults to ""
   * @param {object} tree_object  an object that describes the structured tree data representing cell_line
   *                              counts, defaults to {children:[]}
   */
  defaults: {
    "filter": "",
    "tree_object": {children:[]}
  },

    /**
   * fetches new data from the pert_info api
   * the tree_object data is updated
   * @param  {string}  search_string  value to search for
   * @param  {string}  search_type    one of 'multi', 'single', or 'cell'
   */
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell_ids
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = {};
    if (search_type === "multi"){
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$in":' + search_string + '}}', g:"cell_id"};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}', g:"cell_id"};
    }
    if (search_type === "cell") {
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$regex":""}}', g:"cell_id"};
    }


    // run the api request
    var self = this;
    $.getJSON(pert_info,params,function(response) {
      if (response === 0){
        children = [];
      }else{
        children = response;
      }
      if (search_type === "cell") {
        children = _.filter(children,function(o){return o._id == search_string;});
      }
      var t = (new Date()).getTime();
      self.set({tree_object: {name:"root", children:children}, last_update: t});
    });
  }
});
/**
 * `count_model = new PertCountModel({type_string: '["trt_sh","trt_oe"]'})`
 * 
 * A Backbone.Model that represents the count of a set of perturbagens
 * The data model captures both the total count of perturbagens that meet a search criteria and the count 
 * of each annotation category for the set of perturbagens
 * optional arguments:
 * @param {string} type_string  the string of pert_types that will be search upon fetching data, defaults
 *                              to '["trt_sh","trt_oe"]'
 */

Barista.Models.PertCountModel = Backbone.Model.extend({
  /**
   * describes the model's default parameters
   * @param {string}  type_string      the string of pert_types that will be search upon fetching data,
   *                                   defaults to '["trt_sh","trt_oe"]'
   * @param {number}  count            the number of perturbagens matching an api query, defaults to 0
   * @param {array}   pert_types       an array of objects representing pert_type categories to keep track
   *                                   of, defaults to [{}}]
   * @param {string}  pert_type_field  a field name over which to look for pert_types.  This runs an
   *                                   aggregated count over the specified field name in the Connectivity
   *                                   Map database, defaults to 'pert_icollection'
   * @param {date}    last_update      a timestamp of the latest model update, defaults to the current time
   */
  defaults: {
    "type_string": '["trt_cp"]',
    "count": 0,
    "pert_types": [{}],
    "pert_type_field": "pert_icollection",
    "last_update": (new Date()).getTime()
  },

  /**
   * fetches new data from the pert_info api
   * the count and pert_types data is replaced with new data coming from the api call
   * @param  {string}  search_string  value to search for
   * @param  {string}  search_type    one of 'multi', 'single', or 'cell'
   */
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell_ids
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = {};
    if (search_type === "multi") {
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$in":' + search_string + '}}',c:true};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}',c:true};
    }
    if (search_type === "cell") {
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"","$options":"i"},"cell_id":"' + search_string + '"}', c:true};
    }

    // run the api request
    var self = this;
    var num_perts;
    $.getJSON(pert_info,params,function(perts) {
      if (perts === 0){
        num_perts = 0;
      }else{
        num_perts = perts.count;
      }
      var t = (new Date()).getTime();
      params = _.omit(params,'c');
      params = _.extend(params,{g:self.get('pert_type_field')});
      $.getJSON(pert_info, params, function(pert_types){
        self.set({count: num_perts, pert_types: pert_types, last_update: t});
      });
    });
  }
});

/**
 * A Backbone.Model that represents a single perturbagen's description
 * The data model captures annotation data from compounds or genes
 * To do this, the model uses CompoundDetailModel and GeneDetailModel under the hood and pulls in their
 * attributes depending on how the model's fetch method is called
 */

Barista.Models.PertDetailModel = Backbone.Model.extend({
  /**
   * describes the model's default parameters
   * this an incomplete list of defaults, only those that are common to all perturbagens
   */
  defaults: {
    cell_id: [],
    num_gold: null,
    num_inst: null,
    num_sig: null,
    pert_id: null,
    pert_iname: null,
    pert_type: null,
    sig_id: [],
    sig_id_gold: []
  },

  /**
   * a sub-model to be used when the PertDetailModel model needs to fetch Compound annotations
   * @type {Barista}
   */
  compound_sub_model: new Barista.Models.CompoundDetailModel(),

  /**
   * a sub-model to be used when the PertDetailModel model needs to fetch Gene annotations
   * @type {Barista}
   */
  gene_sub_model: new Barista.Models.GeneDetailModel(),

  /**
   * fetches new data from the pert_info api
   * depending on the model_type parameter,the method calls the appropriate fetch method for the given sub
   * model type and fills the PertDetailModel's attributes with that of the sub model
   * @param  {string}  search_string  value to search for
   * @param  {string}  search_type    one of 'multi', 'single', or 'cell'
   */
  fetch: function(search_string, model_type){
      var self = this;
      var deferred = $.Deferred();
      switch (model_type){
      case "compound":
          this.compound_sub_model.fetch(search_string).then(function(attributes){
              self.clear().set(attributes);
              deferred.resolve();
          });
          break;
      case "gene":
          this.gene_sub_model.fetch(search_string).then(function(attributes){
              self.clear().set(attributes);
              deferred.resolve();
          });
          break;
      }
      return deferred;
  }
});

/**
 * `pert_model = new PertModel()`
 * 
 * A Backbone.Model that represents a single perturbagen
 */
Barista.Models.PertModel = Backbone.Model.extend({
	/**
  * Overrides the base Model's initialize method to set the model's cid to the pert_id of the perturbagen
  * @todo these parameters are never used, consider removing from function
  * @param  {string}  attributes
  * @param  {string}  options
  */ 
	initialize: function(attributes, options) {
		this.cid = this.get('pert_id');
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			default: this.set({pert_type_label: '<span class="label" style="background-color: #BDBDBD">' + pert_type + '</span>'});
		}
  }
});
/**
 * A Backbone.Model to hold the information needed to make a simple scatter plot
 * The model includes a title, x and y axis titles, x and y data, and an optional object for metadata on
 * the points in the data
 * The meta data object should contain attributes for each meta data category and an array of values
 * matching the size of the points in the data
 * for example:
 * meta_data = {'dose: [1,2,3]', timepoint: ['6H','6H','6H']}
 * usage:
 * summly_result = new SummlyResultModel();
 */
Barista.Models.ScatterPlotModel = Backbone.Model.extend({
	/**
   * set of model defaults
   * @param {string} title         the title of the plot. Defaults to ""
   * @param {string} x_axis-title  the title of the x_axis. Defaults to ""
   * @param {string} y_axis-title  the title of the y_axis. Defaults to ""
   * @param {array}  x_data        an array of data for the x_axis. Defaults to []
   * @param {array}  y_data        an array of data for the y_axis. Defaults to []
   * @param {object} meta-data     object containing meta data for the points in the plot. Defaults to {}
   */
	defaults: {
		title: "",
		x_axis_title: "",
		y_axis_title: "",
		x_data: [],
		y_data: [],
		meta_data: {}
	}
});
/**
 * A Backbone.Model that represents the count of a set of signatures
 * he data model captures both the total count of signatures that meet a search criteria and the count of
 * each annotation category for the set of signatures
 * optional arguments:
 * @param {string} type_string  the string of pert_types that will be search upon fetching data, defaults
 *                              to '["trt_sh","trt_oe"]'
 */

Barista.Models.SigCountModel = Backbone.Model.extend({
  /**
   * describes the model's default parameters
   * @param {string} type_string      the string of pert_types that will be search upon fetching data,
   *                                  defaults to '["trt_sh","trt_oe"]'
   * @param {number} count            the number of perturbagens matching an api query, defaults to 0
   * @param {array}  pert_types       an array of objects representing pert\_type categories to keep track
   *                                  of, defaults to [{}}]
   * @param {string} pert_type_field  a field name over which to look for pert_types.  This runs an
   *                                  aggregated count over the specified field name in the Connectivity
   *                                  Map database, defaults to 'pert_icollection'
   * @param {date}   last_update      a timestamp of the latest model update, defaults to the current time
   */
  defaults: {
    "type_string": '["trt_sh","trt_oe","trt_oe.mut"]',
    "count": 0,
    "pert_types": [{}],
    "pert_type_field": "pert_icollection",
    "last_update": (new Date()).getTime()
  },

  /**
   * fetches new data from the sig_info api
   * the count and sig_types data is replaced with new data coming from the api call
   * @param  {string}  search_string  value to search for
   * @param  {string}  search_type    one of 'multi', 'single', or 'cell'
   */
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell_ids
    var sig_info = Barista.APIURL + '/a2/siginfo?callback=?';
    var params = {};
    if (search_type === "multi") {
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$in":' + search_string + '}}',c:true};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}',c:true};
    }
    if (search_type === "cell") {
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"","$options":"i"},"cell_id":"' + search_string + '"}', c:true};
    }

    // run the api request
    var self = this;
    var num_perts;
    $.getJSON(sig_info,params,function(perts) {
      if (perts === 0){
        num_perts = 0;
      }else{
        num_perts = perts.count;
      }
      var t = (new Date()).getTime();
      params = _.omit(params,'c');
      params = _.extend(params,{g:self.get('pert_type_field')});
      $.getJSON(sig_info, params, function(pert_types){
        self.set({count: num_perts, pert_types: pert_types, last_update: t});
      });
    });
  }
});
/**
 * `pert_model = new SignatureModel()`
 * 
 * A Backbone.Model that represents a single signature
 */
Barista.Models.SignatureModel = Backbone.Model.extend({
	/**
     * Overides the base Model's initialize method to add the model's cid to the sig_id of the perturbagen
     * @todo these parameters are never used, consider removing from function
     * @param  {string}  attributes
     * @param  {string}  options
     */
	initialize: function(attributes, options) {
		// set the unique collection identifier to match the sig_id
		this.cid = this.get('sig_id');
		
		// generate an html label for pert_type
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			this.set({pert_type_label: '<span class="label" style="background-color: #BDBDBD">' + pert_type + '</span>'});
		}

		// generate an html label for is_gold
		var is_gold = this.get('is_gold');
		if (is_gold){
			this.set({is_gold_label: '<span class="label" style="background-color: #F0E442; color:gray">Gold</span>'});
		}else{
			this.set({is_gold_label: '<span class="label">Not Gold</span>'});
		}
  }
});
/**
 * summly_result = new SummlyResultModel();
 * A Backbone.Model that represents the a single CMap Summly result
 * A single result is composed of the connection between two pert_inames (a query and a target), the
 * component data that went into computing the summly result, and the statistics  of the summly computation
 */
Barista.Models.SummlyResultModel = Backbone.Model.extend({
	/**
   * set up defaults for model values
   * @param {string} query             the query perturbagen (pert_iname), defaults to *""*
   * @param {string} target            the target perturbagen (pert_iname), defaults to *""*
   * @param {number} summly_score      summarized connectivity score across cell types, defaults to *-666*
   * @param {number} summly_rank       summarized percent rank across cell types, defaults to *-666*
   * @param {number} specificity       fraction of background queries that score/rank higher than the
   *                                   observed connection, defaults to *-666*
   * @param {object} cell_line_scores  the connectivity map scores in each cell line for the target
   *                                   perturbagen, defaults to *{}*
   */
	defaults: {
		query: "",
		target: "",
		summly_score: -666,
		summly_rank: -666,
		specificity: -666,
		cell_line_scores: {}
	},

	/**
     * Overides the base Model's initialize method to add the model's cid to the summly_id
     * @todo these parameters are never used, consider removing from function
     * @param  {string}  attributes
     * @param  {string}  options
     */
	initialize: function(attributes,options){
		this.cid = this.get('target');
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			default: this.set({pert_type_label: '<span class="label">' + pert_type + '</span>'});
		}
	}
});
/**
 * A Backbone.Model that represents the data required to build a CMapTickView
 * The model contains a data object that has keys for each row to display in the view and array values for
 * each tick to display in each row
 * An example data object might look like this:

			{PC3: [.23,-.28], MCF7: [-0.6]}
 * example usage:
 * tick_model = new TickModel();
 */
Barista.Models.TickModel = Backbone.Model.extend({
	/**
   * set up defaults for model values
   * @param {string} title        the title to use in the plot, defaults to ""
   * @param {object} data_object  the data object to use when plotting. defualts to {}
   */
	defaults: {
		title: "",
		data_object: {}
	}
});
/**
 * Model to represent a sequence and the modifications on that sequence
 */
Barista.Models.SequenceModel = Backbone.Model.extend({

  /**
   * the default options for the model
   */
  defaults: {
    sequence: '',
    displaySequence: '',
    modifications: new Backbone.Collection()
  },

  /**
   * initialize the model to listen to its own model changes
   */
  initialize: function() {
    this.listenTo(this, 'change:sequence', this.parseSequence);
  },

  /**
   * function to populate the derived model attributes of displaySequence and modifications
   */
  parseSequence: function() {
    var sequence = this.get('sequence'),
        modifications = this.get('modifications'),
        indices = [],
        numMods = 0;
        modObjects = [];

    // reset the modifications collection
    modifications.reset();

    // remove leading and trailing underscores
    sequence = sequence.replace(/_/g,'');

    // find all occurances of '(' in the sequence, these are the modifications
    for(var i=0; i<sequence.length;i++) {
      if (sequence[i] === '(') {
        indices.push(i);
      }
    }

    // for each modification, pop it out of the sequence string and add a new
    // model to the modifications collection
    indices.forEach(function(index) {
      var mod;
      index -= numMods * 4;
      mod = sequence.slice(index + 1,index + 3);
      sequence = [sequence.slice(0,index),sequence.slice(index + 4,sequence.length)].join('');
      modObjects.push({index: index, modification: mod});
      numMods += 1;
    });

    modifications.add(modObjects);

    // set the derived attributes on the model
    this.set({'modifications': modifications, 'displaySequence': sequence});
  }
});
