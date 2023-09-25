// DEPENDENCIES
const Router = require('express');

// HANDLERS
const getPokemonsHandler = require('../handlers/pokemonHandlers/getPokemonsHandler');
const getPokemonsByIdHandler = require('../handlers/pokemonHandlers/getPokemonsByIdHandler');
const getPokemonsByNameHandler = require('../handlers/pokemonHandlers/getPokemonsByNameHandler');
const postPokemonsHandler = require('../handlers/pokemonHandlers/postPokemonsHandler');

const pokemonsRouter = Router();

// ROUTES
pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/name', getPokemonsByNameHandler);   // TODO: FIX
pokemonsRouter.get('/:id', getPokemonsByIdHandler);    // TODO: FIX
pokemonsRouter.post('/', postPokemonsHandler);

module.exports = pokemonsRouter;