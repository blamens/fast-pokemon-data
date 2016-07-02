import Ember from 'ember';

export default Ember.Service.extend({
  favoritePokemons: [],
  favoritePokemon(pokemon) {
    if (this.get('favoritePokemons').indexOf(pokemon) >= 0) {
      this.get('favoritePokemons').removeObject(pokemon);
    }
    else {
      this.get('favoritePokemons').addObject(pokemon);
    }
  }
});
