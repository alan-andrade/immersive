import DS from 'ember-data';

var Document = DS.Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  chunks: DS.hasMany('chunk', {async: true})
});

Document.reopenClass({
  FIXTURES: [{
    id: 1,
    title: "Discover what's an immersive read",
    summary: 'This is a tour of the possibilities you can create with immersive',
    chunks: [1, 2]
  },
  {
    id: 2,
    title: 'How to cry' ,
    summary: 'cry cry poor baby',
    chunks: [3]
  }]
});

export default Document;
