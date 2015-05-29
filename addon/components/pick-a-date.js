import Ember from 'ember';
import layout from '../templates/components/pick-a-date';

export default Ember.Component.extend({
  layout: layout,
  picker: null,
  placeholder: "Select a date",
  options: {},
  value: null,
  date: null,


  connectPickadate: Ember.on('didInsertElement', function() {
    this.$('input').pickadate(this.get('options'));
    this.set('picker', this.$('input').pickadate('picker'));
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
    date.setYear(dateItem.year);
    date.setMonth(dateItem.month);
    date.setDate(dateItem.date);
  })
});
