import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Auth0 API Keys -- file part of .gitignore
import AUTH0 from './config/auth0';

ReactDOM.render(
  <App clientId={AUTH0.CLIENT_ID} domain={AUTH0.DOMAIN} />,
  document.getElementById('root')
);
