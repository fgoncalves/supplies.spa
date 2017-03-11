import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GoogleSignInButton from '../components/GoogleSignInButton';
import { requestGoogleSignIn } from '../dux/loginReducer';

export class Login extends Component {
  static get propTypes() {
    return {
      signInWithGoogle: PropTypes.func.isRequired
    };
  }

  handleGoogleSignInButtonClick(props) {
    return () => {
      const { signInWithGoogle } = props;
      signInWithGoogle();
    };
  }

  render() {
    return (
      <div id="loginContainer">
        <h1 className="appTitle">Supplies</h1>
        <GoogleSignInButton onClick={this.handleGoogleSignInButtonClick(this.props)} />
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    signInWithGoogle: () => {
      dispatch(requestGoogleSignIn());
    }
  };
}

export default connect(undefined, mapDispatchToProps)(Login);
