require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

const routes = require('../routes');

const error = require('../middlewares/error');

app.use(routes);

app.use(error);

module.exports = app;