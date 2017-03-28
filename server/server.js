/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database connections
const uri = 'mongodb://localhost/plateit';

mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to Mongoose');
});

// http Routes
require('./routes.js')(app);

app.listen(app.get('port'), () => {
  console.log(`Server running at localhost:${app.get('port')}`);
});
