/**
 * a Backgrid extension that supports display of html content in Backgrid tables
 * HTMLCellView defines both a Backgrid.Cell subclass (HTMLCell) and Backgrid.CellFormatter subclass
 * (HTMLFormatter) to use with it
 * These two components are used together to integrate with Backgrid's existing cell definitions in order
 * to use HTMLCell and HTMLFormatter, specify the cell parameter of a Backgrid column definition as
 * HTMLCell
 * as an example:
 *    // set up a default collection and column definition for the grid to operate on
     this.collection = new PertCollection();
     this.columns = [{name: "pert_type_label", label: "Pert Type", cell: HTMLCell, editable: false}];
 
     // build the template
     this.compile_template();
 
     // build the grid on the template
     this.grid = new Backgrid.Grid({
       columns: this.columns,
       collection: this.collection
     });
 */


/**
 * A formatter that extends Backgrid.CellFormatter to return exactly the raw input value as opposed to the
 * string version of the raw input
 */
Barista.HTMLFormatter = Backgrid.HTMLFormatter = function () {};
Barista.HTMLFormatter.prototype = new Backgrid.CellFormatter();
_.extend(Barista.HTMLFormatter.prototype, {
  /**
   * returns the raw input value
   * @param  {string} rawValue  string version of raw input
   */
  fromRaw: function (rawValue) {
    if (_.isUndefined(rawValue) || _.isNull(rawValue)) return '';
    return rawValue;
  }
});

/**
 * An extension of Backgrid.Cell to render raw html content into the target element of the cell
 */
Barista.HTMLCell = Backgrid.HTMLCell = Backgrid.Cell.extend({
  className: "html-cell",
  formatter: new Barista.HTMLFormatter(),
  /**
   * renders the view
   */
  render: function () {
    this.$el.html(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
    return this;
  }
});