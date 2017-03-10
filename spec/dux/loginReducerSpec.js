import { expect } from 'chai';
import loginReducer, { requestGoogleSignIn } from 'src/dux/loginReducer';

describe('Login reducer', () => {
  it('returns the same state for action REQUEST_GOOGLE_SIGN_IN', () => {
    const action = requestGoogleSignIn();
    const state = { somekey: 'some value' };

    const result = loginReducer(state, action);

    expect(result).to.deep.equal(state);
  });

  it('returns the same state for an unkown action', () => {
    const action = { type: 'some unknown action' };
    const state = { somekey: 'some value' };

    const result = loginReducer(state, action);

    expect(result).to.deep.equal(state);
  });

  it('returns the initial state when none is specified', () => {
    const action = requestGoogleSignIn();
    const result = loginReducer(undefined, action);

    expect(result).to.deep.equal({});
  });
});
