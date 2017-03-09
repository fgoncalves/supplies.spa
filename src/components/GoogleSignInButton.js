import React, { PropTypes } from 'react';

function GoogleSignInButton({ onClick }) {
  return (
    <div onClick={ onClick }>
      <span>Sign In with Google: { process.env.FIREBASE_API_KEY }</span>
    </div>
  );
};

GoogleSignInButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default GoogleSignInButton;
