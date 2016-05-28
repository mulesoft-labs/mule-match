import { PropTypes } from 'react';

// For a more detailed list of PropTypes
// see http://ricostacruz.com/cheatsheets/react.html#property-validation

const propTypes = {
  allFeatures:    PropTypes.arrayOf(PropTypes.object).isRequired,
  currentFeature: PropTypes.object,
  selectFeature:  PropTypes.func.isRequired,
  ignoreFeature:  PropTypes.func.isRequired
};

export default propTypes;
