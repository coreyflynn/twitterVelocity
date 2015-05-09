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
