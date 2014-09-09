import Document from 'immersive/models/document';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('document');
  },

  afterModel: function (model) {
    this.transitionTo('documents.read', model.content[0]);
  },

  actions: {
    readNext: function () {
      var doc = this.modelFor('documents.read'),
        chunk = this.modelFor('documents.read.chunk'),
        chunks = doc.get('chunks'),
        position = chunks.indexOf(chunk),
        nextChunk = chunks.objectAt(position+1);

      if (!!nextChunk) {
        this.transitionTo('documents.read.chunk', nextChunk.get('id'));
      } else {
        this.transitionTo('documents');
      }
    }
  }
});
