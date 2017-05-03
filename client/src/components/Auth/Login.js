import React from 'react';

const Login = (props) => {
  return (
    <div>
      <button 
        onClick={props.login}
        className='login button full'
      >
        Signin or Signup
      </button>
    </div>
  );
}

export default Login;