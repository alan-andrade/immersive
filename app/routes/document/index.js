import Em from 'ember';
import Document from 'immersive/models/document';

export default Em.Route.extend({
  model: function () {
    return this.store.find('document');
  }
});
