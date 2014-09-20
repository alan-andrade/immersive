import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function () {
      var doc = this.modelFor('documents.read'),
        docs  = this.modelFor('documents'),
        position  = docs.indexOf(doc),
        nextDoc   = docs.objectAt(position+1);

      if (!!nextDoc) {
        this.replaceWith('documents.read', nextDoc);
      }
    }
  }
});
