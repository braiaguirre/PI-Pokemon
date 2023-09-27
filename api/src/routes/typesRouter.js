// DEPENDENCIES
const Router = require('express');

// HANDLERS
const URL = '../handlers/typesHandlers/';
const getTypesHandler = require(URL + 'getTypesHandler');

const typesRouter = Router();

// ROUTES
typesRouter.get('/', getTypesHandler);

module.exports = typesRouter;