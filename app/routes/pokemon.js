import Ember from 'ember';

export default Ember.Route.extend({
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
  actions: {
    transitionToPokemons() {
      this.transitionTo('pokemons');
    },
    loading() {
      return true;
    },
    error(error) {
      if (error) {
        return this.transitionTo('pokemons');
      }
    }
  }
});
