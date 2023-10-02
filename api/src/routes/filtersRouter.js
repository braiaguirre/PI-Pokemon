// DEPENDENCIES
const Router = require('express');

// HANDLERS
const URL = '../handlers/filtersHandlers/';
const pokemonsFilterHandler = require(URL + 'pokemonsFilterHandler');

const filtersRouter = Router();

// ROUTES
filtersRouter.get('/pokemons', pokemonsFilterHandler);

module.exports = filtersRouter;