import React, { PropTypes } from 'react';

function GoogleSignInButton({ onClick }) {
  return (
    <div onClick={ onClick } className="googleSignInButton">
      Sign In with Google
    </div>
  );
}

GoogleSignInButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default GoogleSignInButton;
