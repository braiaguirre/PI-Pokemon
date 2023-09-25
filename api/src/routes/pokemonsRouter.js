// DEPENDENCIES
const Router = require('express');

// HANDLERS
const getPokemonsHandler = require('../handlers/pokemonsHandlers/getPokemonsHandler');
const getPokemonsByIdHandler = require('../handlers/pokemonsHandlers/getPokemonsByIdHandler');
const getPokemonsByNameHandler = require('../handlers/pokemonsHandlers/getPokemonsByNameHandler');
const postPokemonsHandler = require('../handlers/pokemonsHandlers/postPokemonsHandler');

const pokemonsRouter = Router();

// ROUTES
pokemonsRouter.get('/', getPokemonsByNameHandler);   // TODO: FIX
pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/:id', getPokemonsByIdHandler);    // TODO: FIX
pokemonsRouter.post('/', postPokemonsHandler);

module.exports = pokemonsRouter;