import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root'

// Auth0 API Keys -- file part of .gitignore
// import AUTH0 from './config/auth0';

ReactDOM.render(<Root />, document.getElementById('root'));


// Alex's work here:
// ReactDOM.render(
//   <App clientId={AUTH0.CLIENT_ID} domain={AUTH0.DOMAIN} />,
//   document.getElementById('root')
// );
