/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pickadate',
  included: function(app) {
    this._super.included(app);

    app.import('bower_components/pickadate/lib/picker.js');
    app.import('bower_components/pickadate/lib/picker.date.js');
    app.import('bower_components/pickadate/lib/picker.time.js');
    app.import('bower_components/pickadate/lib/themes/default.css');
    app.import('bower_components/pickadate/lib/themes/default.date.css');
    app.import('bower_components/pickadate/lib/themes/default.time.css');
  }
};
