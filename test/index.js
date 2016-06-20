import 'babel-polyfill';
import chai           from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai      from 'sinon-chai';
import chaiThings     from 'chai-things';
import chaiEnzyme     from 'chai-enzyme';

// To create a code coverage report for all components you have to require all the sources and test
// See https://github.com/deepsweet/isparta-loader

// Require all `test/**/index.js`
const testsContext = require.context('./src/', true, /.*\.spec\.js$/);
testsContext.keys().forEach(testsContext);

// Require `src/App.js`
const appContext = require.context('../src/', false, /App\.js$/);
appContext.keys().forEach(appContext);

// Require `src/components/index.js`
const containersContext = require.context('../src/containers/', false, /index\.js$/);
containersContext.keys().forEach(containersContext);

// Require `src/domains/index.js`
const domainsContext = require.context('../src/domains/', false, /index\.js$/);
domainsContext.keys().forEach(domainsContext);

// Require `src/services/index.js`
const servicesContext = require.context('../src/services/', false, /index\.js$/);
servicesContext.keys().forEach(servicesContext);

// Setup libraries used for testing
chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(chaiThings);
chai.use(chaiEnzyme());

global.should = chai.should();
