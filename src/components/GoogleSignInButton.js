import React, { PropTypes } from 'react';

function GoogleSignInButton({ onClick, className }) {
  return (
    <div onClick={ onClick } className={ className }>
      <span>Sign In with Google</span>
    </div>
  );
};

GoogleSignInButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default GoogleSignInButton;
