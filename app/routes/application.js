import Em from 'ember';

export default Em.Route.extend({
  actions: {
    read: function () {
      var app = this.controllerFor('application');
      app.set('activeChunk', 1);
      console.log(app.get('activeChunk'));
    }
  }
});
