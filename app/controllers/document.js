import Em from 'ember';

export default Em.ObjectController.extend({
  colors: function () {
    var chunks = this.get('model').get('chunks');
    return chunks.mapBy('color');
  }.property(),
});
