import Ember from 'ember';

export default Ember.Route.extend({
  // Services
  favorites: Ember.inject.service(),
  pokemonList: Ember.inject.service('pokemon-list'),

  // Setup controller!
  setupController(controller) {
    this._super(...arguments);
    controller.set('favorites', this.get('favorites.favoritePokemons'));
    controller.set('list', this.get('pokemonList.list'));
  },

  // Model
  model() {
  },
});
