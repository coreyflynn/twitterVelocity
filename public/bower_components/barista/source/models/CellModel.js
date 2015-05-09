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
