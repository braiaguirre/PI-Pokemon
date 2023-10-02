// DEPENDENCIES
const Router = require('express');

// HANDLERS
const URL = '../handlers/filtersHandlers/';
const filterHandler = require(URL + 'filterHandler');

const filtersRouter = Router();

// ROUTES
filtersRouter.post('/', filterHandler);

module.exports = filtersRouter;