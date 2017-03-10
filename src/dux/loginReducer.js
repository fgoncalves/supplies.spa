const REQUEST_GOOGLE_SIGN_IN = 'REQUEST_GOOGLE_SIGN_IN';
export function requestGoogleSignIn() {
  return {
    type: REQUEST_GOOGLE_SIGN_IN
  };
}

export default function(state = {}, action) {
  switch (action.type) {
    case REQUEST_GOOGLE_SIGN_IN:
      // TODO: change state and start login with firebase
      return state;
    default:
      return state;
  }
}
