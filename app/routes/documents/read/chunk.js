export default Ember.Route.extend({
  needs: 'documents.read',

  afterModel: function (model) {
    this.controllerFor('documents.read').set('color', model.get('color'));
  }
});
