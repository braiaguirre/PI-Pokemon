// DEPENDENCIES
const Router = require('express');

// SPECIFIC ROUTERS
const pokemonsRouter = require('./pokemonsRouter');
const pokedexRouter = require('./pokedexRouter');
const abilitiesRouter = require('./abilitiesRouter');
const typesRouter = require('./typesRouter');
const usersRouter = require('./usersRouter');
const filtersRouter = require('./filtersRouter');

const mainRouter = Router();

// ROUTES
mainRouter.use('/pokemons', pokemonsRouter);
mainRouter.use('/pokedex', pokedexRouter);
mainRouter.use('/types', typesRouter);
mainRouter.use('/abilities', abilitiesRouter);
mainRouter.use('/users', usersRouter);
mainRouter.use('/filters', filtersRouter);

module.exports = mainRouter;