import React from 'react';

let Login = (props) => {
  return (
    <div>
      <button onClick={props.login}>Sign In</button>
    </div>
  );
}

export default Login;