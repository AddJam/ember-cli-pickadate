import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('pick-a-time', 'Integration | Component | pick a time', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  this.render(hbs`{{pick-a-time}}`);

  assert.equal(this.$('.ember-pick-a-time').length, 1);
  assert.equal(this.$('.ember-pick-a-time input').length, 1);
});

test('placeholder is set', function(assert) {
  assert.expect(1);
  this.render(hbs`{{pick-a-time placeholder='pew'}}`);

  assert.equal(this.$('.ember-pick-a-time input').attr('placeholder'), 'pew');
});

test('clicking input opens picker', function(assert) {
  assert.expect(2);
  this.render(hbs`{{pick-a-time}}`);
  let $input = this.$('.ember-pick-a-time input');

  assert.ok(!$input.hasClass('picker__input--active'));

  $input.click();
  assert.ok($input.hasClass('picker__input--active'));
});

test('date is updated', function(assert) {
  assert.expect(5);
  let date = new Date();
  let initialDate = new Date(date);
  this.set('date', date);
  this.render(hbs`{{pick-a-time date=date}}`);

  assert.ok(this.get('date') === date, "Date set");

  this.$('.ember-pick-a-time input').click();

  Ember.run.next(() => {
    this.$('.ember-pick-a-time .picker__list-item').click();

    assert.ok(this.get('date') !== initialDate, "Date changed");

    // Check hours and minutes didn't get reset / changed
    assert.ok(this.get('date').getYear() === initialDate.getYear(), "Year didn't change");
    assert.ok(this.get('date').getMonth() === initialDate.getMonth(), "Month didn't change");
    assert.ok(this.get('date').getDate() === initialDate.getDate(), "Day didn't change");
  });
});
