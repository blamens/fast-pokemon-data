import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pokemon', {path: 'pokemon/:id'});
  this.route('pokemons');
  this.route('pokemonnotfound');
});

export default Router;
