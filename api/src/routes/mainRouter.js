// DEPENDENCIES
const Router = require('express');

// SPECIFIC ROUTERS
const pokemonsRouter = require('./pokemonsRouter');
const typesRouter = require('./typesRouter');
const accessRouter = require('./accessRouter');

const mainRouter = Router();

// ROUTES
mainRouter.use('/pokemons', pokemonsRouter);
mainRouter.use('/types', typesRouter);
mainRouter.use('/access', accessRouter);

module.exports = mainRouter;