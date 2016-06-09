[![npm version](https://badge.fury.io/js/ember-cli-pickadate.svg)](http://badge.fury.io/js/ember-cli-pickadate)
[![Travis CI](https://travis-ci.org/AddJam/ember-cli-pickadate.svg)](https://travis-ci.org/AddJam/ember-cli-pickadate)

# ember-cli-pickadate

Components wrapping the date and time pickers of the [pickadate](http://amsul.ca/pickadate.js) library.

## Installation

`ember install ember-cli-pickadate`

**Note**
If you are using an older version of ember, you might need an older version of the addon.

Ember version | Addon version | Addon README
--------------|---------------|--------------
>= 2.5        | latest        | You're on it
>= 2.0, < 2.5 | 1.2.1         | [README](https://github.com/AddJam/ember-cli-pickadate/blob/fd230d73a1e0534321cdd433f26aade6dd52bd4c/README.md)
< 2.0         | 0.3.2         | [README](https://github.com/AddJam/ember-cli-pickadate/tree/58ae2d75e7fb8d3b96d9ba4a2882ff7af0772408)

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Usage

### Date Picker
* Note that if using they curly HTMLBars syntax you need pass all attributes as `attribute=(readonly VALUE)`, this is the default for angle bracket components.
```html
{{pick-a-date date=(readonly date) on-selected=(action (mut date)) placeholder="Pick a date" options=(readonly extraPickadateOptions)}}
```

or the following syntax if you have angle bracket components.
```html
<pick-a-date date={{date}} on-selected=(action (mut date)) placeholder="Pick a date" options={{extraPickadateOptions}}>
```

#### Parameters
 * disabled - (boolean) Disable the datepicker
 * placeholder - (string) The text to display in the input when nothing is selected
 * options - (object) Options available via the pick-a-date API
 * date - (Date) The date to display
 * on-selected - (function) Called when a date is selected and passed the new date as the first argument.

### Time Picker

* Note that if using they curly HTMLBars syntax you need pass all attributes as `attribute=(readonly VALUE)`, this is the default for angle bracket components.
```html
{{pick-a-time date=(readonly date) on-selected=(action (mut date)) placeholder="Pick a time" options=(readonly extraPickadateOptions)}}
```

or the following syntax if you have angle bracket components.
```html
<pick-a-time date={{date}} on-selected=(action (mut date)) placeholder="Pick a time" options={{extraPickadateOptions}}>
```

#### Parameters
 * disabled - (boolean) Disable the timepicker
 * placeholder - (string) The text to display in the input when nothing is selected
 * name - sets input `name` attribute for use with [formats](http://amsul.ca/pickadate.js/date/#formats)
 * options - (object) Options available via the pick-a-date API
 * date - (Date) The date to display (of which the time part will be displayed to the user)
 * on-selected - (function) Called when a date is selected and passed the new date as the first argument.
 * nulls-date - (boolean) If true, will set the date to null when the clear button is pressed.
                          If false, will set the time part to 0 only when the clear button is pressed, the date part is unaffected.

----------------------

All parameters are optional.

You can pass the same date object to both pickers.

### Global default options
You can set default options to be passed to pick-a-time and pick-a-date in `config/environment.js`.

```
ENV['ember-cli-pickadate'] = {
  date: {},
  time: {}
}
```

The objects set for `date` and `time` will become defaults for all instances across your application. The `options` passed to each individual instance will be merged with the defaults specified here.

### Changing Theme
You can specify the theme as part of the build options to the add-on using the "ember-cli-pickadate" config property in your ember-cli-build.js (or in Brocfile.js if you are using an Ember CLI version older than 1.13):

```
var app = new EmberApp({
  "ember-cli-pickadate": {
    theme: 'default'
  }
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
