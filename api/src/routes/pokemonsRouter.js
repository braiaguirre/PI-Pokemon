// DEPENDENCIES
const Router = require('express');

// HANDLERS
const getPokemonsHandler = require('../handlers/pokemonHandlers/getPokemonsHandler');
const getPokemonsByIdHandler = require('../handlers/pokemonHandlers/getPokemonsByIdHandler');
const getPokemonsByNameHandler = require('../handlers/pokemonHandlers/getPokemonsByNameHandler');
const postPokemonsHandler = require('../handlers/pokemonHandlers/postPokemonsHandler');

const pokemonsRouter = Router();

// ROUTES
pokemonsRouter.get('/pokemons', getPokemonsHandler);
pokemonsRouter.get('/pokemons/name', getPokemonsByNameHandler);   // TODO: FIX
pokemonsRouter.get('/pokemons/:id', getPokemonsByIdHandler);    // TODO: FIX
pokemonsRouter.post('/pokemons', postPokemonsHandler);

module.exports = pokemonsRouter;