const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// http Routes
require('./routes.js')(app);

const port = app.get('port');

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});

module.exports = app;
