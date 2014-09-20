import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ImmersiveENV.locationType
});

Router.map(function() {
  this.resource('documents', { path: '/' }, function () {
    this.route('read', { path: '/:doc_id' }, function () {
      this.route('intro', { path: '/intro' });
      this.route('chunk', { path: '/:chunk_id' });
    });
  });
});

export default Router;
