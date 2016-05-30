import { PropTypes } from 'react';

// For a more detailed list of PropTypes
// see http://ricostacruz.com/cheatsheets/react.html#property-validation

const propTypes = {
  match:            PropTypes.object,
  potentialMatches: PropTypes.arrayOf(PropTypes.object)
};

export default propTypes;
