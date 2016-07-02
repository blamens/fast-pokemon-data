import Ember from 'ember';
import isInArray from '../utils/is-in-array';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  isFavorited: isInArray('name', 'favorites.favoritePokemons'),

  actions: {
    favoriteWasClicked(pokemon) {
      this.get('favorites').favoritePokemon(pokemon);
    }
  }
});
