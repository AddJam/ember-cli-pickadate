/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pickadate',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/pickadate/lib/picker.js');
    app.import(app.bowerDirectory + '/pickadate/lib/picker.date.js');
    app.import(app.bowerDirectory + '/pickadate/lib/picker.time.js');
    app.import(app.bowerDirectory + '/pickadate/lib/themes/default.css');
    app.import(app.bowerDirectory + '/pickadate/lib/themes/default.date.css');
    app.import(app.bowerDirectory + '/pickadate/lib/themes/default.time.css');
  }
};
