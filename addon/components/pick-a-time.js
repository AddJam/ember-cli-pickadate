import Ember from 'ember';
import layout from '../templates/components/pick-a-time';

export default Ember.Component.extend({
  layout: layout,
  picker: null,
  placeholder: "Select a time",
  options: {},
  value: null,
  date: null,

  connectPickatime: Ember.on('didInsertElement', function() {
    this.$('input').pickatime(this.get('options'));
    this.set('picker', this.$('input').pickatime('picker'));
  }),

  updateDate: Ember.observer('value', function() {
    var date = this.get('date');

    if (!date) {
      date = new Date();
      this.set('date', date);
    }

    var dateItem = this.get('picker').get('select');
    if (!dateItem) {
      return;
    }
    date.setHours(dateItem.hour, dateItem.mins, 0, 0);
  })
});
