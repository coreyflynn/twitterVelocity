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