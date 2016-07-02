import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pokemon-info', 'Integration | Component | pokemon info', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pokemon-info}}`);
  assert.equal(this.$().text().trim(), 'Unfavorite');

  // Template block usage:
  /*
  this.render(hbs`
    {{#pokemon-info}}
      template block text
    {{/pokemon-info}}
  `);
  */

  assert.equal(this.$().text().trim(), 'Unfavorite');
});
