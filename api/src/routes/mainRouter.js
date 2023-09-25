// DEPENDENCIES
const Router = require('express');

// SPECIFIC ROUTERS
const pokemonsRouter = require('./pokemonsRouter');
const typesRouter = require('./typesRouter');

const mainRouter = Router();

// ROUTES
mainRouter.use('/pokemons', pokemonsRouter);
mainRouter.use('/types', typesRouter);

module.exports = mainRouter;