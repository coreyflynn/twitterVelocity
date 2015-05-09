/**
 * Model to represent a sequence and the modifications on that sequence
 */
Barista.Models.SequenceModel = Backbone.Model.extend({

  /**
   * the default options for the model
   */
  defaults: {
    sequence: '',
    displaySequence: '',
    modifications: new Backbone.Collection()
  },

  /**
   * initialize the model to listen to its own model changes
   */
  initialize: function() {
    this.listenTo(this, 'change:sequence', this.parseSequence);
  },

  /**
   * function to populate the derived model attributes of displaySequence and modifications
   */
  parseSequence: function() {
    var sequence = this.get('sequence'),
        modifications = this.get('modifications'),
        indices = [],
        numMods = 0;
        modObjects = [];

    // reset the modifications collection
    modifications.reset();

    // remove leading and trailing underscores
    sequence = sequence.replace(/_/g,'');

    // find all occurances of '(' in the sequence, these are the modifications
    for(var i=0; i<sequence.length;i++) {
      if (sequence[i] === '(') {
        indices.push(i);
      }
    }

    // for each modification, pop it out of the sequence string and add a new
    // model to the modifications collection
    indices.forEach(function(index) {
      var mod;
      index -= numMods * 4;
      mod = sequence.slice(index + 1,index + 3);
      sequence = [sequence.slice(0,index),sequence.slice(index + 4,sequence.length)].join('');
      modObjects.push({index: index, modification: mod});
      numMods += 1;
    });

    modifications.add(modObjects);

    // set the derived attributes on the model
    this.set({'modifications': modifications, 'displaySequence': sequence});
  }
});
