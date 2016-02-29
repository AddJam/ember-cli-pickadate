import Ember from 'ember';

const { Component } = Ember;
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
export default Component.extend({
  tagName: 'input',
  attributeBindings: ['placeholder', 'disabled', 'type'],
  disabled: null,
  type: 'text',
  placeholder: "Select a date",
  picker: null,
  date: null,
  classNames: ['ember-pick-a-date'],

  didInsertElement() {
    const options = this.attrs.options || {};
    options.onClose = options.onClose || this.onClose;
    options.onSet = () => {
      this.onSelected();
    };

    for (var option in options.value) {
      options[option] = options.value[option];
    }

    this.$().pickadate(options);
    this.set('picker', this.$().pickadate('picker'));
  },

  didRender() {
    this.updateInputText();
    this.toggleInputDisabled();
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

  toggleInputDisabled: function() {
    if(this.get('disabled')) {
      this.get('picker').stop();
      this.$().prop('disabled', true); // pick-a-date is doing funny things with the disabled attribute
    } else {
      this.get('picker').start();
      this.$().prop('disabled', false);
    }
  },

  onClose() {
    // Prevent pickadate from re-opening on focus
    Ember.$(document.activeElement).blur();
  },

  onSelected(){
    const date = this.get('date') || new Date();
    const picker = this.get('picker');
    const dateItem = picker.get('select');
    if (!dateItem) {
      if (this.attrs['on-selected']) {
        this.attrs['on-selected'](null);
      }
      return;
    }

    const newDate = new Date(date);
    newDate.setYear(dateItem.year);
    newDate.setMonth(dateItem.month);
    newDate.setDate(dateItem.date);
    if (this.attrs['on-selected']) {
      if (newDate && !isNaN(newDate.getTime())) { //Number.isNaN PhantomJs does not like this yet
        this.attrs['on-selected'](newDate);
      } else {
        this.attrs['on-selected'](null);
      }
    }
  },

  willDestroyElement() {
    const picker = this.get('picker');
    if (picker && picker.get('start')) {
      picker.stop();
    }
  }

});
