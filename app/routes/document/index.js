import Em from 'ember';
import Document from 'immersive/models/document';

export default Em.Route.extend({
  model: function () {
    console.log("FROM ROUTE");
    return [Document.create({
      id: 1,
      title: "First immersive post",
      description: "Explanation of how immersive works."
    }), Document.create({
      id: 2,
      title: "Instrucciones para llorar",
      description: "Julio cortazar nos dice como llorar."
    })];
  },
});
