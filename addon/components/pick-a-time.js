import Ember from 'ember';
import layout from '../templates/components/pick-a-time';

export default Ember.Component.extend({
  layout: layout,
  picker: null,
  placeholder: "Select a time",
  options: {},
  value: null,

  connectPickatime: Ember.on('didInsertElement', function() {
    this.set('picker', this.$('input').pickatime(this.get('options')));
  })
});
