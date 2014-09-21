import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function () {
    var view = this;

    this.controller.
      addObserver('color', function() {
        view.$().animate({
          backgroundColor: this.get('color')
        });
      });
  }
});
