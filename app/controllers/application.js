import Em from 'ember';

export default Em.Controller.extend({
  isReading: function () {
    return this.get('activeChunk') === 0;
  }.property('activeChunk'),

  activeChunk: 0
});
