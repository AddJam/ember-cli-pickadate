import Ember from 'ember';
import config from 'ember-get-config';

const {
  Component,
  observer,
  isEmpty
} = Ember;

export default Component.extend({
  tagName: 'input',
  attributeBindings: ['placeholder', 'disabled', 'type'],
  disabled: null,
  type: 'text',
  date: null,
  picker: null,

  didRender() {
    this.updateInputText();
    this.toggleInputDisabled();
  },

  getOptions() {
    const defaults = {
      'date': {},
      'time': {}
    };
    const appOptions = config['ember-cli-pickadate'];
    return Ember.assign(defaults, appOptions);
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

  dateChanged: observer('date', function() {
    this.updateInputText()
  }),

  optionsChanged: observer('options', function() {
    let options = this.get('options');

    if (isEmpty(options)) {
      // TODO: unset options which were removed
      return;
    }

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        this.get('picker').set(key, options[key]);
      }
    }
  }),

  onClose(){
    // Prevent pickadate from re-opening on focus
    Ember.$(document.activeElement).blur();
  },

  willDestroyElement() {
    const picker = this.get('picker');
    if (picker && picker.get('start')) {
      picker.stop();
    }
  }
})
