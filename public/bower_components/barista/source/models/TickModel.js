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