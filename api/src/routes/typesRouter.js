// DEPENDENCIES
const Router = require('express');

// HANDLERS
const getTypesHandler = require('../handlers/typesHandlers/getTypesHandler');

const pokemonsRouter = Router();

// ROUTES
pokemonsRouter.get('/types', getTypesHandler);

module.exports = pokemonsRouter;