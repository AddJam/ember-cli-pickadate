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
`{{pick-a-date date=date placeholder="Pick a date" options=extraPickadateOptions}}`

### Time Picker
`{{pick-a-time date=date placeholder="Pick a time" options=extraPickadateOptions}}`

All parameters are optional.

You can pass the same date object to both pickers.
