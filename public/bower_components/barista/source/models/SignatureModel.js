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