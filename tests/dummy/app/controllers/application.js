import Ember from 'ember';

export default Ember.Controller.extend({
  date: null,
  date2: new Date(),
  dateDisabled: false,
  datePlaceholder: 'Pick a date',
  timeDisabled: false,
  timePlaceholder: 'Pick a time',
  nullsDate: false,
  timeOptions: Ember.computed(function () {
    return {
      closeOnSelect: false
    };
  })
});
