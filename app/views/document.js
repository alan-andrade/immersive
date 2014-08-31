import Em from 'ember';

export default Em.View.extend({
  didInsertElement: function () {
    this.$().css({
      'background-image': 'linear-gradient(to top,  ' +
      this.controller.get('colors').get('firstObject') +
      ' 0%, ' +
      this.controller.get('colors').get('lastObject') +
      ' 100%)'
    });
  },
});
