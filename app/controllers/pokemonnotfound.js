import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    // Actions
    redirectToPokemon(value) {
      value = value.toLowerCase();
      this.transitionToRoute('pokemon', value);
    }
  }
});
