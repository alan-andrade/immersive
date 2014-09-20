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
      var story = this.modelFor('documents.read'),
          chunk = this.modelFor('documents.read.chunk'),
          chunks = story.get('chunks'),
          position = chunks.indexOf(chunk),
          nextChunk;

      if (position !== -1) {
        nextChunk = chunks.objectAt(position+1);

        if (nextChunk) {
          this.transitionTo('documents.read.chunk', nextChunk.get('id'));
        } else {
          this.transitionTo('documents.read.intro', 4);
        }
      }
    },

    skipStory: function () {
      var docs    = this.modelFor('documents'),
          current = this.modelFor('documents.read'),
          pos     = docs.indexOf(current),
          next    = docs.objectAt(pos + 1);

      this.transitionTo('documents.read.intro', next.get('id'));
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
