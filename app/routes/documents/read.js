export default Em.Route.extend({
  model: function (params) {
    return this.store.find('document', params.doc_id);
  },

  afterModel: function (model) {
    var self = this;
    model.get('chunks').then(function (c) {
      var chunk = c.get('firstObject');
      self.replaceWith('documents.read.chunk', chunk.get('id'));
    });
  }
});
