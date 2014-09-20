import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this.addObserver('controller.color', function() {
      this.$().animate({backgroundColor: this.get('controller.color')});
    });
  }
});
