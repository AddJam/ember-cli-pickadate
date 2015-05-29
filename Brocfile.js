/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

app.import('bower_components/pickadate/lib/picker.js');
app.import('bower_components/pickadate/lib/picker.date.js');
app.import('bower_components/pickadate/lib/picker.time.js');
app.import('bower_components/pickadate/lib/themes/default.css');
app.import('bower_components/pickadate/lib/themes/default.date.css');
app.import('bower_components/pickadate/lib/themes/default.time.css');

module.exports = app.toTree();
