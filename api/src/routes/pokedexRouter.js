// DEPENDENCIES
const Router = require('express');

// HANDLERS
const getPokedexHandler = require('../handlers/pokedexHandlers/getPokedexHandler');
const postPokedexHandler = require('../handlers/pokedexHandlers/postPokedexHandler');

const pokedexRouter = Router();

// ROUTES
pokedexRouter.get('/:id', getPokedexHandler);
pokedexRouter.post('/', postPokedexHandler);

module.exports = pokedexRouter;