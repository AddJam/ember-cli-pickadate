/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pickadate',
  isDevelopingAddon: function() { return false; },
  included: function(app) {
    var options = app.options[this.name] || {};

    this._super.included(app);

    if (!options.theme) {
      options.theme = 'default';
    }
    if(!process.env.EMBER_CLI_FASTBOOT) {
      app.import(app.bowerDirectory + '/pickadate/lib/picker.js');
      app.import(app.bowerDirectory + '/pickadate/lib/picker.date.js');
      app.import(app.bowerDirectory + '/pickadate/lib/picker.time.js');
    }
    app.import(app.bowerDirectory + '/pickadate/lib/themes/' + options.theme + '.css');
    app.import(app.bowerDirectory + '/pickadate/lib/themes/' + options.theme + '.date.css');
    app.import(app.bowerDirectory + '/pickadate/lib/themes/' + options.theme + '.time.css');
  }
};
