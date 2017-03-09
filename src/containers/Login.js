import React, {Component} from 'react';
import GoogleSignInButton from '../components/GoogleSignInButton'

class Login extends Component {
  render() {
    return <GoogleSignInButton onClick={this.handleGoogleSignInButtonClick} />
  }

  handleGoogleSignInButtonClick(event) {
    console.log("Works");
  };
}

export default Login;
