import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('pick-a-date', 'Integration | Component | pick a date', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  this.render(hbs`{{pick-a-date}}`);

  assert.equal(this.$().length, 1);
});

test('placeholder is set', function(assert) {
  assert.expect(1);
  this.render(hbs`{{pick-a-date placeholder='pew'}}`);

  assert.equal(this.$('input').attr('placeholder'), 'pew');
});

test('clicking input opens picker', function(assert) {
  assert.expect(2);
  this.render(hbs`{{pick-a-date}}`);
  let $input = this.$('input');

  assert.notOk($input.hasClass('picker__input--active'));

  $input.click();
  assert.ok($input.hasClass('picker__input--active'));
});

test('date is updated', function(assert) {
  assert.expect(4);
  let date = new Date();
  let initialDate = new Date(date);
  this.set('date', date);
  this.render(hbs`{{pick-a-date date=(readonly date) on-selected=(action (mut date))}}`);

  assert.ok(this.get('date') === date, "Date set");

  this.$().click();

  Ember.run.next(() => {
    this.$('.picker__day--infocus').click();

    assert.ok(this.get('date') !== initialDate, "Date changed");

    // Check hours and minutes didn't get reset / changed
    assert.ok(this.get('date').getHours() === initialDate.getHours(), "Hours didn't change");
    assert.ok(this.get('date').getMinutes() === initialDate.getMinutes(), "Minutes didn't change");
  });
});

test('date picker is updated on value change', function(assert) {
  const DAY_IN_MILLISECONDS = 86400000;
  let date = new Date();
  let options = { format: "mm/dd/yyyy" };
  let padNumber = function(number) { return number < 10 ? '0' + number : String(number); };
  let formattedDate = padNumber(date.getMonth() + 1) + '/' + padNumber(date.getDate()) + '/' + date.getFullYear();
  let $input;

  this.set('options', options);
  this.set('date', undefined);

  this.render(hbs`
    {{pick-a-date
      date=(readonly date)
      options=options
      on-selected=(action (mut date))
    }}
  `);

  $input = this.$('input');
  assert.equal($input.val(), "", "Expected input value to be empty");

  this.set('date', new Date(date.getTime() + DAY_IN_MILLISECONDS));
  $input.val(formattedDate);

  Ember.run.next(() => {
    assert.equal($input.val(), formattedDate, "Expected input value to be set to date");
    assert.equal($input.pickadate('picker').get('value'), formattedDate, "Expected pick a date to have date selected");
    //This ensures we don't get into weird cyclical conditions
    //If the user wants to set the value of the pick a date from an external source
    //then it is assumed they are setting it from the date object they passed into date=
    assert.notEqual(this.get('date'), date, 'Does not set date when value is set');
  });
});

test('can toggle disabled property', function(assert) {
  this.set('disabled', true);
  this.set('date', undefined);

  this.render(hbs`
    {{pick-a-date
      date=(readonly date)
      disabled=(readonly disabled)
    }}
  `);

  let $input = this.$('input');
  assert.equal($input.prop('disabled'), true);

  this.set('disabled', false);
  assert.equal($input.prop('disabled'), false);
});

