import Ember from 'ember';

export default Ember.Route.extend({
  needs: 'documents.read',

  afterModel: function (model) {
    this.controllerFor('application').set('color', model.get('color'));
    this.controllerFor('documents').set('isReading', true);
  }
});
