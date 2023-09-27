// DEPENDENCIES
const Router = require('express');

// HANDLERS
const URL = '../handlers/usersHandlers';
const getLoginHandler = require(URL + 'getLoginHandler');
const getLogoutHandler = require(URL + 'getLogoutHandler');
const editUsersHandler = require(URL + 'editUsersHandler');
const postUsersHandler = require(URL + 'postUsersHandler');
const deleteUsersHandler = require(URL + 'deleteUsersHandler');

const usersRouter = Router();

// ROUTES
usersRouter.get('/login', getLoginHandler);
usersRouter.get('/logout', getLogoutHandler);
usersRouter.post('/edit', editUsersHandler);
usersRouter.post('/register', postUsersHandler);
usersRouter.delete('/', deleteUsersHandler);

module.exports = usersRouter;