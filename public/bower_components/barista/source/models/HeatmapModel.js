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