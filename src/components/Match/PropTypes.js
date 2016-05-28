import { PropTypes } from 'react';

// For a more detailed list of PropTypes
// see http://ricostacruz.com/cheatsheets/react.html#property-validation

const propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default propTypes;
