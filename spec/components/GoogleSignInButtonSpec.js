import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import GoogleSignInButton from 'src/components/GoogleSignInButton';

describe('Google Sign In Button', () => {
  const className = 'some class';
  const onClickCallback = sinon.spy();
  const props = {
    onClick: onClickCallback,
    className
  };
  let googleSignInButton;

  beforeEach(() => {
    googleSignInButton = shallow(<GoogleSignInButton { ...props } />);
  });

  afterEach(() => {
    onClickCallback.reset();
  });

  it('renders the button with the given class', () => {
    expect(googleSignInButton.hasClass(className)).to.be.true;
  });

  context('when clicked', () => {
    it('calls the click callback', () => {
      googleSignInButton.simulate('click');

      expect(onClickCallback).to.have.been.calledOnce;
    });
  });
});
