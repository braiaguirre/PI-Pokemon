// DEPENDENCIES
const Router = require('express');

// HANDLERS
const getPokemonsHandler = require('../handlers/pokemonsHandlers/getPokemonsHandler');
const getPokemonsByIdHandler = require('../handlers/pokemonsHandlers/getPokemonsByIdHandler');
const getPokemonsByNameHandler = require('../handlers/pokemonsHandlers/getPokemonsByNameHandler');
const postPokemonsHandler = require('../handlers/pokemonsHandlers/postPokemonsHandler');

const pokemonsRouter = Router();

// ROUTES
pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/name', getPokemonsByNameHandler); // ? UNIFY NAME AND '/'
pokemonsRouter.get('/:id', getPokemonsByIdHandler);
pokemonsRouter.post('/', postPokemonsHandler);

module.exports = pokemonsRouter;