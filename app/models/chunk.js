import DS from 'ember-data';

var Chunk = DS.Model.extend({
  document: DS.belongsTo('document'),
  text:     DS.attr('string'),
  color:    DS.attr('string')
});

Chunk.reopenClass({
  FIXTURES: [
    {
      id: 1,
      document_id: 1,
      text: "It was her sister Josephine who told her, in broken sentences; veiled hints that revealed in half concealing. Her husband's friend Richards was there, too, near her. It was he who had been in the newspaper office when intelligence of the railroad disaster was received, with Brently Mallard's name leading the list of killed. He had only taken the time to assure himself of its truth by a second telegram, and had hastened to forestall any less careful, less tender friend in bearing the sad message.",
      color: '#BBD8F2'
    },{
      id: 2,
      document_id: 1,
      text: "She did not hear the story as many women have heard the same, with a paralyzed inability to accept its significance. She wept at once, with sudden, wild abandonment, in her sister's arms. When the storm of grief had spent itself she went away to her room alone. She would have no one follow her.",
      color: '#D5E7F2'
    },{
      id: 3,
      document_id: 1,
      text: "There stood, facing the open window, a comfortable, roomy armchair. Into this she sank, pressed down by a physical exhaustion that haunted her body and seemed to reach into her soul.  She could see in the open square before her house the tops of trees that were all aquiver with the new spring life. The delicious breath of rain was in the air. In the street below a peddler was crying his wares. The notes of a distant song which someone was singing reached her faintly, and countless sparrows were twittering in the eaves.",
      color: '#B33F10'
    },{
      id: 4,
      document_id: 1,
      text: "There were patches of blue sky showing here and there through the clouds that had met and piled one above the other in the west facing her window. She sat with her head thrown back upon the cushion of the chair, quite motionless, except when a sob came up into her throat and shook her, as a child who has cried itself to sleep continues to sob in its dreams. She was young, with a fair, calm face, whose lines bespoke repression and even a certain strength. But now there was a dull stare in her eyes, whose gaze was fixed away off yonder on one of those patches of blue sky. It was not a glance of reflection, but rather indicated a suspension of intelligent thought.",
      color: '#159DF2'
    },{
      id: 5,
      document_id: 4,
      text: "Not much about this topic. Move on :)",
      color: '#050DF2'
    }]
});

export default Chunk;
