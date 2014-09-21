import Ember from 'ember';

export default Em.Route.extend({
  enter: function () {
    var stories = this.modelFor('documents'),
        story   = this.modelFor('documents.read'),
        pos     = stories.indexOf(story),
        next    = stories.objectAt(pos+1);

    this.replaceWith('documents.read.intro',
                     next || stories.get('firstObject.id'));
  }
});
