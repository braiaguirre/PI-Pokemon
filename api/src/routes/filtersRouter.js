// DEPENDENCIES
const Router = require('express');

// HANDLERS
const URL = '../handlers/filtersHandlers/';
const pokemonsFilterHandler = require(URL + 'pokemonsFilterHandler');
const pokedexFilterHandler = require(URL + 'pokedexFilterHandler');

const filtersRouter = Router();

// ROUTES
filtersRouter.get('/pokemons', pokemonsFilterHandler);
filtersRouter.get('/pokedex', pokedexFilterHandler);

module.exports = filtersRouter;