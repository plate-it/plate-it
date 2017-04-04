import React from 'react';

var Login = (props) => {
  console.log('*** Login Props ***', props);
  return (
    <div>
      <h2>Log in to access Plate-It</h2>
      <button onClick={props.login}>Sign In</button>
    </div>
  );
}

export default Login;