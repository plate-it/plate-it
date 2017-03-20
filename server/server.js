const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('port', (process.env.PORT || 3001));

const uri = 'mongodb://localhost/plateit';

mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to Mongoose');
});

app.get('/test', (req, res) => {
  res.send('hello world');
});

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at localhost:${app.get('port')}`);
});
