export default Em.View.extend({
  attributeBindings: ['style'],

  style: function () {
    return 'background-color: ' + this.controller.get('color') + ';';
  }.property('controller.color')
});
