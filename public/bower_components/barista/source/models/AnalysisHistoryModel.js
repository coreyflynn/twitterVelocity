/**
 * `pert_model = new AnalysisHistoryModel()`
 * 
 * A Backbone.Model that represents an analysis history object.
 */
Barista.Models.AnalysisHistoryModel = Backbone.Model.extend({
    /**
     * Overides the base Model's initialize method to add the models date attribute and set the cid to the
     * mongo _id field
     * @todo these parameters are never used, consider removing from function
     * @param  {object}  attributes
     * @param  {object}  options
     */
    initialize: function(attributes, options) {
        this.cid = this.get('_id')
        this.set("date", new Date(parseInt(this.cid.substring(0,8), 16)*1000));
        this.set("rpt",this.get("params").rpt);
        if (this.get("status") === "completed"){
            this.set({view_result_link: '<a href="' + this.get("standard_result") + '"><i class="fa fa-eye"></i></a>'});
        }else{
            this.set({view_result_link: ''});
        }
        this.set({edit: '<i class="fa fa-times-circle cmap-grid-delete-button" onclick="Backbone.trigger(' + "'AnalysisHistoryModel:delete'" + ',' + "'" +  this.get("job_id") + "'" + ')"></i>'});
  }
});
