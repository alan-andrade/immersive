import Em from 'ember';

export default Em.Route.extend({
  model: function (params) {
    return this.store.find('document', params.doc_id);
  },
});
