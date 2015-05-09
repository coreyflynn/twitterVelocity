/**
 * `generic_count_model = new GenericCountModel()`
 * 
 * A Backbone.Model that represents the count of a set CMap databbase items
 * The data model captures the total count of perturbagens that meet a search criteria
 * optional arguments:
 * @param {string} search_field  the document field the model with count over upon fetching data,
 *                               defaults to "pert_iname"
 * @param {string} url           the url of the api service to fetch data from, defaults to
 *                               "//api.lincscloud.org/a2/pertinfo"
 */

Barista.Models.GenericCountModel = Backbone.Model.extend({

  defaults:{
    count:0,

  },
  /**
   * custom initialization to make sure we have the correct url for jsonp
   */
  initialize:function(attrs){
    this.setListeners();
  },

/**
 * add description
 */
  setListeners: function() {
    var source = this.get('source');
    if (source) {
      this.listenTo(source,'update',function(){
        if(attrs.source.getCount(attrs.key)) {
          this.set('count',attrs.source.getCount(attrs.key));
        } else {
          this.set('count',0);
        }
      });
    };
  }
  
});

Barista.Models.GenericSourceModel = Backbone.Model.extend({

  /**
   * custom initialization to make sure we have the correct url for jsonp
   */
  initialize:function(attrs){
    this.setKey();
  },

/**
 * add description
 */
  setKey: function() {
    var key = this.get('key');
    this.url = 'http://10.125.171.42:8080/' + key;
  },

/**
 * add description
 * @param  {[type]} inputKey [description]
 */
  getCount:function(inputKey){
    return this.data[inputKey.group][inputKey.name];
  },

/**
 * add description
 */
  update:function(){
    var self = this;
    $.getJSON(this.url,function(data){
      self.data = data;
      self.trigger('update');
    })
  }
});

