// DEPENDENCIES
const Router = require('express');

// HANDLERS
const getPokedexHandler = require('../handlers/pokedexHandlers/getPokedexHandler');
const postPokedexHandler = require('../handlers/pokedexHandlers/postPokedexHandler');
const deletePokedexHandler = require('../handlers/pokedexHandlers/deletePokedexHandler');

const pokedexRouter = Router();

// ROUTES
pokedexRouter.get('/:userId', getPokedexHandler);
pokedexRouter.post('/', postPokedexHandler);
pokedexRouter.delete('/', deletePokedexHandler);

module.exports = pokedexRouter;