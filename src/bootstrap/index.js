equire('dotenv').config();

const path = require('path');
const glob = require('glob');
const express = require('express');
const compression = require('compression');

const app = express();
app.use(compression());
const port = process.env.ENV_PORT || 3000;

// eslint-disable-next-line import/no-dynamic-require, global-require
glob.sync(path.resolve(__dirname, '../*/*-api.js')).forEach((file => require(file)(app)));

// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Api Server running on :${port}`));

module.exports = server;
