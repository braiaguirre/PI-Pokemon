const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes/mainRouter');

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use('/', mainRouter);

module.exports = server;