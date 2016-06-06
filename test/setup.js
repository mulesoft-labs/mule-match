import chai       from 'chai';
import chaiEnzyme from 'chai-enzyme';

const setup = () => {
  global.should = chai.should();
  chai.use(chaiEnzyme());
};

export default setup;
