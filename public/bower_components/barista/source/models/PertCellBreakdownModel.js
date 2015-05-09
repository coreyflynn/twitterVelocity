/**
 * `pert_cell_breakdown_model = new PertCellBreakdownModel()`
 * 
 * A Backbone.Model that represents the cell line based breakdown of a set of perturbagens
 * the number of perturbagens matching a query is counted for each cell line
 * Data for all cell lines that contain a match to the query are represented in the model
 */
Barista.Models.PertCellBreakdownModel = Backbone.Model.extend({
      /**
   * describes the model's default parameters
   * @param {string} filter       the current filter to be used with api calls, defaults to ""
   * @param {object} tree_object  an object that describes the structured tree data representing cell_line
   *                              counts, defaults to {children:[]}
   */
  defaults: {
    "filter": "",
    "tree_object": {children:[]}
  },

    /**
   * fetches new data from the pert_info api
   * the tree_object data is updated
   * @param  {string}  search_string  value to search for
   * @param  {string}  search_type    one of 'multi', 'single', or 'cell'
   */
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell_ids
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = {};
    if (search_type === "multi"){
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$in":' + search_string + '}}', g:"cell_id"};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}', g:"cell_id"};
    }
    if (search_type === "cell") {
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$regex":""}}', g:"cell_id"};
    }


    // run the api request
    var self = this;
    $.getJSON(pert_info,params,function(response) {
      if (response === 0){
        children = [];
      }else{
        children = response;
      }
      if (search_type === "cell") {
        children = _.filter(children,function(o){return o._id == search_string;});
      }
      var t = (new Date()).getTime();
      self.set({tree_object: {name:"root", children:children}, last_update: t});
    });
  }
});