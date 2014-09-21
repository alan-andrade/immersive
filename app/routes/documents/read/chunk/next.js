import Ember from 'ember'

export default Em.Route.extend({
  enter: function () {
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
        this.transitionTo('documents.read.next');
      }
    }
  }
})
