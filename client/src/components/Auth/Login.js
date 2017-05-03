import React from 'react';

const Login = (props) => {
  return (
    <div>
      <button 
        onClick={props.login}
        className='login'
      >
        Signin or Signup
      </button>
    </div>
  );
}

export default Login;