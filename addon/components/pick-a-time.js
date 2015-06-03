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
    var options = this.get('options');
    options.onClose = options.onClose || this.onClose;
    this.$('input').pickatime(options);
    this.set('picker', this.$('input').pickatime('picker'));
  }),

  onClose: function(){
    // Prevent pickadate from re-opening on focus
    Ember.$(document.activeElement).blur();
  },

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
