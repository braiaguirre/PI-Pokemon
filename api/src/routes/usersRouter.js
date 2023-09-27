// DEPENDENCIES
const Router = require('express');

// HANDLERS
const getLoginHandler = require('../handlers/usersHandlers/getLoginHandler');
const getLogoutHandler = require('../handlers/usersHandlers/getLogoutHandler');
const editUsersHandler = require('../handlers/usersHandlers/editUsersHandler');
const postUsersHandler = require('../handlers/usersHandlers/postUsersHandler');
const deleteUsersHandler = require('../handlers/usersHandlers/deleteUsersHandler');

const usersRouter = Router();

// ROUTES
usersRouter.get('/login', getLoginHandler);
usersRouter.get('/logout', getLogoutHandler);
usersRouter.post('/edit', editUsersHandler);
usersRouter.post('/register', postUsersHandler);
usersRouter.delete('/', deleteUsersHandler);

module.exports = usersRouter;