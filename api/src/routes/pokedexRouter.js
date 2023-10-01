// DEPENDENCIES
const Router = require('express');

// HANDLERS
const URL = '../handlers/pokedexHandlers/';
const getPokedexHandler = require(URL + 'getPokedexHandler');

const pokedexRouter = Router();

// ROUTES
pokedexRouter.get('/:page', getPokedexHandler);

module.exports = pokedexRouter;