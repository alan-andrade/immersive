import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ImmersiveENV.locationType
});

Router.map(function() {
  this.resource('documents', { path: '/' }, function () {
    this.route('write');
    this.route('read', { path: '/:doc_id' }, function () {
      this.route('next');
      this.route('intro', { path: '/intro' });
      this.route('chunk', { path: '/:chunk_id' }, function () {
        this.route('next');
      });
    });
  });
});

export default Router;
