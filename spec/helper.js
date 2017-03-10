
import 'babel-polyfill';
import jsdomify from 'jsdomify';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import chaiEnzyme from 'chai-enzyme';
import chaiReact from 'chai-react';


chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiEnzyme());
chai.use(chaiReact);

jsdomify.create();

before(() => jsdomify.create());

beforeEach(() => jsdomify.clear());

after(() => {
  jsdomify.destroy();

  // Delete require cache because React, when imported,
  // caches a reference to the document. Since we need to rebuild
  // the document on every suite run, we also need to flush
  // React and whatever other module cached it.
  Object.keys(require.cache).forEach((key) => delete require.cache[key]);
});
