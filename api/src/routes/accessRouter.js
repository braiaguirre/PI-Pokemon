// DEPENDENCIES
const Router = require('express');

// HANDLERS
const getAccessHandler = require('../handlers/accessHandlers/getAccessHandler');

const accessRouter = Router();

// ROUTES
accessRouter.get('/', getAccessHandler);

module.exports = accessRouter;