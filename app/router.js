import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ImmersiveENV.locationType
});

Router.map(function() {
  this.resource('document', {path: '/'}, function () {
    this.resource('document.read', {path: '/:doc_id'});
  });
});

export default Router;
