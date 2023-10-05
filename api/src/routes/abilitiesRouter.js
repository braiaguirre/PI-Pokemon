// DEPENDENCIES
const Router = require('express');

// HANDLERS
const URL = '../handlers/abilitiesHandlers/';
const getAbilitiesHandler = require(URL + 'getAbilitiesHandler');

const typesRouter = Router();

// ROUTES
typesRouter.get('/', getAbilitiesHandler);

module.exports = typesRouter;