import Em from 'ember';
import Document from 'immersive/models/document';

export default Em.Route.extend({
  model: function () {
    return Document.create({
      title: "First immersive post",
      chunks: [{
        body: "This is an immersive text. The background will change accordingly",
        color: '#ccc'
      },{
        body: "Y ya",
        color: '#aaa'
      }]
    });
  },
});
