import Ember from 'ember';
import layout from '../templates/components/pick-a-date';

export default Ember.Component.extend({
  layout: layout,
  picker: null,
  placeholder: "Select a date",
  options: {},
  value: null,

  connectPickadate: Ember.on('didInsertElement', function() {
    this.set('picker', this.$('input').pickadate(this.get('options')));
  })
});
