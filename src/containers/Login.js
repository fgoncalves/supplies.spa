import React, { Component } from 'react';
import GoogleSignInButton from '../components/GoogleSignInButton';

class Login extends Component {
  handleGoogleSignInButtonClick() {

  }

  render() {
    return <GoogleSignInButton onClick={this.handleGoogleSignInButtonClick} />;
  }
}

export default Login;
