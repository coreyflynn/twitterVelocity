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
