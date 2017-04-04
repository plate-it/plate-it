import React, {PropTypes as T} from 'react';
import AuthService from 'utils/AuthService';

// component should accept an auth object (instance of AuthService) as a prop

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const {auth} = this.props;
    return (
      <div>
        <h1>Login</h1>
        <button onClick={auth.login.bind(this)}>Login</button>
      </div>
    );
  }
}

export default Login;