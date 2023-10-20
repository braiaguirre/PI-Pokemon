// DEPENDENCIES
const Router = require('express');

// HANDLERS
const URL = '../handlers/pokemonsHandlers/';
const getPokemonsHandler = require(URL + 'getPokemonsHandler');
const getPokemonsByIdHandler = require(URL + 'getPokemonsByIdHandler');
const getPokemonsImageHandler = require(URL + 'getPokemonsImageHandler');
const getPokemonsByNameHandler = require(URL + 'getPokemonsByNameHandler');
const postPokemonsHandler = require(URL + 'postPokemonsHandler');
const postCustomPokemonsHandler = require(URL + 'postCustomPokemonsHandler');
const deleteCustomPokemonsHandler = require(URL + 'deleteCustomPokemonsHandler');

const pokemonsRouter = Router();

// ROUTES
pokemonsRouter.get('/name', getPokemonsByNameHandler);
pokemonsRouter.get('/query', getPokemonsByIdHandler);
pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/image/:id', getPokemonsImageHandler);
pokemonsRouter.post('/', postPokemonsHandler);
pokemonsRouter.post('/custom', postCustomPokemonsHandler);
pokemonsRouter.post('/custom/delete/', deleteCustomPokemonsHandler);

module.exports = pokemonsRouter;