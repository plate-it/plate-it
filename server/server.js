const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));

app.get('/test', () => {
  res.send('hello world');
});

app.listen(app.get('port'), () => {
  console.log(`Server running at localhost:${app.get('port')}`);
})
