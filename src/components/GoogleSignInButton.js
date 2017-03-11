import React, { PropTypes } from 'react';

function GoogleSignInButton({ onClick }) {
  return (
    <div onClick={ onClick } className="button buttonBlue">
      <span>Sign In with Google</span>
    </div>
  );
}

GoogleSignInButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default GoogleSignInButton;
