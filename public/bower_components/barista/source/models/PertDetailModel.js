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
