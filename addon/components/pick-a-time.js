import Ember from 'ember';
import Picker from './picker';

const {
  Component,
  isEmpty,
  isNone,
  observer
 } = Ember;
const DEFAULT_TIME_FORMAT = 'hh-i';

/**
 * @public
 *
 * @param disabled - (boolean) Disable the timepicker
 * @param placeholder - (string) The text to display in the input when nothing is selected
 * @param options - (object) Options available via the pick-a-date API
 * @param date - (Date) The inital date to display
 * @param on-selected - (function) Called when a time is selected and passed the new date as the first argument.
 * @param nulls-date - (boolean) If true, will set the date to null when the clear button is pressed.
 *                               If false, will set the time part to 0 only when the clear button is pressed, the date part is unaffected.
 */
export default Picker.extend({
  placeholder: "Select a time",
  classNames: ['ember-pick-a-time'],

  didInsertElement() {
    const defaults = this.getOptions().date;
    const options = {
      ...defaults,
      ...this.attrs.options
    };

    for (var option in options.value) {
      options[option] = options.value[option];
    }

    options.onClose = options.onClose || this.onClose;
    options.onSet = () => {
      this.onSelected();
    };
    this.$().pickatime(options);
    this.set('picker', this.$().pickatime('picker'));
  },

  updateInputText() {
    const date = this.get('date');
    const options = this.attrs.options || {};
    const format = options.format || DEFAULT_TIME_FORMAT;
    const picker = this.get('picker');

    if (!picker.get('open')) {
      picker.set('select', date, {
        format: format,
        muted: true
      });
    }
  },

  onSelected(){
    const date = this.get('date') || new Date();
    const dateItem = this.get('picker').get('select');
    let newDate = new Date(date);
    if (isNone(dateItem)) {
      if(this.attrs['nulls-date'] === true) {
        newDate = null;
      } else {
        newDate.setHours(0, 0, 0, 0);
      }
    } else {
      newDate.setHours(dateItem.hour, dateItem.mins, 0, 0);
    }

    if (this.attrs['on-selected']) {
      this.attrs['on-selected'](newDate);
    }
  }
});
