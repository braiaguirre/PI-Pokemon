// DEPENDENCIES
const Router = require('express');

// HANDLERS
const URL = '../handlers/filtersHandlers/';
const orderHandler = require(URL + 'orderHandler');
const filterHandler = require(URL + 'filterHandler');

const filtersRouter = Router();

// ROUTES
filtersRouter.post('/order', orderHandler);
filtersRouter.post('/filter', filterHandler);

module.exports = filtersRouter;