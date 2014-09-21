import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('document');
  },

  afterModel: function (model) {
    this.transitionTo('documents.read.intro', model.content.get('firstObject'));
  },

  actions: {
    nextChunk: function () {
      this.replaceWith('documents.read.chunk.next');
    },

    skipStory: function () {
      this.replaceWith('documents.read.next');
    },

    readStory: function () {
      var story = this.modelFor('documents.read'),
          self  = this;

      story.get('chunks').then(function (chunks) {
        self.transitionTo('documents.read.chunk', chunks.get('firstObject.id'));
      });
    }
  }
});
