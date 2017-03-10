import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Login, mapDispatchToProps } from 'src/containers/Login';
import GoogleSignInButton from 'src/components/GoogleSignInButton';
import { requestGoogleSignIn } from 'src/dux/loginReducer';

describe('Login container', () => {
  const signInWithGoogle = sinon.spy();
  let component;

  beforeEach(() => {
    const props = {
      signInWithGoogle
    };

    component = shallow(<Login {...props} />);
  });

  afterEach(() => {
    signInWithGoogle.reset();
  });

  context('when Google\'s sign in button is clicked', () => {
    it('dispatches the action to request said login', () => {
      component.find(GoogleSignInButton).simulate('click');

      expect(signInWithGoogle).to.have.been.calledOnce;
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = sinon.spy();
    });

    afterEach(() => {
      dispatch.reset();
    });

    context('signInWithGoogle', () => {
      it('it dispatches the action REQUEST_GOOGLE_SIGN_IN', () => {
        mapDispatchToProps(dispatch).signInWithGoogle();

        const expectedAction = requestGoogleSignIn();
        expect(dispatch).to.have.been.calledWith(expectedAction);
      });
    });
  });
});
