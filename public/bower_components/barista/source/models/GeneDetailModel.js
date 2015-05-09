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
