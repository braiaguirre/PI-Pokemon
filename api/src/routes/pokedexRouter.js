// DEPENDENCIES
const Router = require('express');

// HANDLERS
const URL = '../handlers/pokedexHandlers/';
const getPokedexHandler = require(URL + 'getPokedexHandler');
const postPokedexHandler = require(URL + 'postPokedexHandler');
const deletePokedexHandler = require(URL + 'deletePokedexHandler');

const pokedexRouter = Router();

// ROUTES
pokedexRouter.get('/:userId', getPokedexHandler);
pokedexRouter.post('/', postPokedexHandler);
pokedexRouter.delete('/', deletePokedexHandler);

module.exports = pokedexRouter;