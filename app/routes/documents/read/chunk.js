export default Ember.Route.extend({
  needs: 'documents.read',

  actions: {
    didTransition: function () {
      var model = this.modelFor('documents.read.chunk'),
        controller = this.controllerFor('documents');

      controller.set('currentChunk', model);
    }
  }
});
