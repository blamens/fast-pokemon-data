import Ember from 'ember';

export default Ember.Route.extend({
  // Services
  favorites: Ember.inject.service(),
  pokemonList: Ember.inject.service('pokemon-list'),
  model (params) {
    return $.get(`http://pokeapi.co/api/v2/pokemon/${params.id}`).then(raw => {
      // Here we can adjust the model we get back from the API!
      var stats = Ember.Object.create({
        name: raw.name.capitalize(),
        shinyImage: raw.sprites.front_shiny,
        image: raw.sprites.front_default,
        speed: `${raw.stats[0].base_stat}`,
        specialdefense: `${raw.stats[1].base_stat}`,
        specialattack: `${raw.stats[2].base_stat}`,
        defense: `${raw.stats[3].base_stat}`,
        attack: `${raw.stats[4].base_stat}`,
        hp: `${raw.stats[5].base_stat}`
      });
      return stats;
    });
  },
  // Setup controller!
  setupController(controller) {
    this._super(...arguments);
    controller.set('favorites', this.get('favorites.favoritePokemons'));
    controller.set('list', this.get('pokemonList.list'));
  },
  actions: {
    loading() {
      return true;
    },
    error() {
      this.transitionTo('pokemonnotfound');
    }
  }
});
