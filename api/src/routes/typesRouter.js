// DEPENDENCIES
const Router = require('express');

// HANDLERS
const getTypesHandler = require('../handlers/typesHandlers/getTypesHandler');

const typesRouter = Router();

// ROUTES
typesRouter.get('/', getTypesHandler);

module.exports = typesRouter;