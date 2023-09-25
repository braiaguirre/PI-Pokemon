// DEPENDENCIES
const Router = require('express');

// HANDLERS
const getTypesHandler = require('../handlers/typesHandlers/getTypesHandler');

const pokemonsRouter = Router();

// ROUTES
pokemonsRouter.get('/', getTypesHandler);

module.exports = pokemonsRouter;