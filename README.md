[![npm version](https://badge.fury.io/js/ember-cli-pickadate.svg)](http://badge.fury.io/js/ember-cli-pickadate)
[![Travis CI](https://travis-ci.org/AddJam/ember-cli-pickadate.svg)](https://travis-ci.org/AddJam/ember-cli-pickadate)

# ember-cli-pickadate

Components wrapping the date and time pickers of the [pickadate](http://amsul.ca/pickadate.js) library.

## Installation

ember-cli >= 0.2.5

`ember install ember-cli-pickadate`

ember-cli < 0.2.5

`ember install:addon ember-cli-pickadate`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Usage

### Date Picker
`{{pick-a-date date=(readonly date) on-selected=(action (mut date)) placeholder="Pick a date" options=extraPickadateOptions}}`

or the following syntax if you have angle bracket components.

`<pick-a-date date={{date}} on-selected=(action (mut date)) placeholder="Pick a date" options={{extraPickadateOptions}}>`

#### Parameters
 * disabled - (string) Disable the datepicker
 * placeholder - (string) The text to display in the input when nothing is selected
 * options - (object) Options available via the pick-a-date API
 * date - (Date) The date to display
 * on-selected - (function) Called when a date is selected and passed the new date as the first argument.

### Time Picker
`{{pick-a-time date=(readonly date) on-selected=(action (mut date)) placeholder="Pick a time" options=extraPickadateOptions}}`

or the following syntax if you have angle bracket components.

`<pick-a-time date={{date}} on-selected=(action (mut date)) placeholder="Pick a time" options={{extraPickadateOptions}}>`

#### Parameters
 * disabled - (string) Disable the timepicker
 * placeholder - (string) The text to display in the input when nothing is selected
 * options - (object) Options available via the pick-a-date API
 * date - (Date) The date to display (of which the time part will be displayed to the user)
 * on-selected - (function) Called when a date is selected and passed the new date as the first argument.
 * nulls-date - (boolean) If true, will set the date to null when the clear button is pressed.
                          If false, will set the time part to 0 only when the clear button is pressed, the date part is unaffected.

All parameters are optional.

You can pass the same date object to both pickers.

### Build Options
You can specify options to the add-on using the "ember-cli-pickadate" config property in your ember-cli-build.js (or in Brocfile.js if you are using an Ember CLI version older than 1.13):

```
var app = new EmberApp({
  "ember-cli-pickadate": { [options] }
});
```

Options:

* `theme`: specify a theme to use (default: 'default')



## License

The MIT License (MIT)

Copyright (c) 2015

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
