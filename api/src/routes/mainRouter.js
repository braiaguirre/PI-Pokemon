// DEPENDENCIES
const Router = require('express');

// SPECIFIC ROUTERS
const pokemonsRouter = require('./pokemonsRouter');
const pokedexRouter = require('./pokedexRouter');
const typesRouter = require('./typesRouter');
const usersRouter = require('./usersRouter');

const mainRouter = Router();

// ROUTES
mainRouter.use('/pokemons', pokemonsRouter);
mainRouter.use('/pokedex', pokedexRouter);
mainRouter.use('/types', typesRouter);
mainRouter.use('/users', usersRouter);

module.exports = mainRouter;