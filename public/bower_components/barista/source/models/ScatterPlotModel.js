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