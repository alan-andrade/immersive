import Ember from 'ember'

export default Em.Route.extend({
  enter: function () {
    var story = this.modelFor('documents.read'),
        chunk = this.modelFor('documents.read.chunk'),
        router = this,
        position, nextChunk;

    if (!story) {
      return this.replaceWith('documents.read.next');
    }

    story.get('chunks').then(function (chunks) {
      position = chunks.indexOf(chunk);

      if (position !== -1) {
        nextChunk = chunks.objectAt(position+1);

        if (nextChunk) {
          router.replaceWith('documents.read.chunk', nextChunk.get('id'));
        } else {
          router.replaceWith('documents.read.next');
        }
      }
    });
  }
})
