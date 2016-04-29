import Ember from 'ember';
import Picker from './picker';

const {
  Component,
  isEmpty,
  observer
} = Ember;
const DEFAULT_DATE_FORMAT = 'd mmmm, yyyy';

/**
 * @public
 *
 * @param disabled - (boolean) disable the datepicker
 * @param placeholder - (string) the text to display in the input when nothing is selected
 * @param options - (object) options available via the pick-a-date API (http://amsul.ca/pickadate.js/)
 * @param date - (Date) the date to display
 * @param on-selected - (function) called when a date is selected and passed the new date as the first argument.
 */
export default Picker.extend({
  placeholder: "Select a date",
  classNames: ['ember-pick-a-date'],

  didInsertElement() {
    const defaults = this.getOptions().date;
    const options = Ember.assign(defaults, this.attrs.options);
    options.onClose = options.onClose || this.onClose;
    options.onSet = (ev) => {
      this.onSelected(ev);
    };

    for (var option in options.value) {
      options[option] = options.value[option];
    }

    this.$().pickadate(options);
    this.set('picker', this.$().pickadate('picker'));
  },

  updateInputText() {
    const date = this.get('date');
    const options = this.attrs.options || {};
    const format = options.format || DEFAULT_DATE_FORMAT;
    const picker = this.get('picker');

    if (!picker.get('open')) {
      picker.set('select', date, {
        format: format,
        muted: true
      });
    }
  },

  onSelected(ev){
    const date = this.get('date') || new Date();
    const picker = this.get('picker');
    const dateItem = picker.get('select');
    if (!dateItem) {
      if (this.attrs['on-selected']) {
        this.attrs['on-selected'](null, ev);
      }
      return;
    }

    const newDate = new Date(date);
    newDate.setDate(1); // Prevent month wrapping bug (e.g. 31 April = 1 May)
    newDate.setYear(dateItem.year);
    newDate.setMonth(dateItem.month);
    newDate.setDate(dateItem.date);
    if (this.attrs['on-selected']) {
      if (newDate && !isNaN(newDate.getTime())) { //Number.isNaN PhantomJs does not like this yet
        this.attrs['on-selected'](newDate, ev);
      } else {
        this.attrs['on-selected'](null, ev);
      }
    }
  }
});
