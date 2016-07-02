import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    // Actions
    favorite(value) {
      this.get('favorites.favoritePokemons').addObject(value);
      this.get('favorites').logFavorites();
    },
    redirectToPokemon(value) {
      value = value.toLowerCase();
      this.transitionToRoute('pokemon', value);
    }
  }
});
