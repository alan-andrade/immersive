import DS from 'ember-data';

var Chunk = DS.Model.extend({
  document: DS.belongsTo('document'),
  text: DS.attr('string'),
  color: DS.attr('string')
});

Chunk.reopenClass({
  FIXTURES: [
    {
      id: 1,
      document_id: 1,
      text: 'Ive seen dark things. Ive seen people going crazy',
      color: '#eee'
    },
    {
      id: 2,
      document_id: 1,
      text: 'I just want to go out, please, let me go!',
      color: '#333'
    }]
});

export default Chunk;
