import { connect }  from 'react-redux';
import { Home }     from 'components';
import {
  actions,
  selectors
} from 'domains';

const homeState = (state) => ({
  allFeatures:      selectors.allFeatures(state),
  currentFeature:   selectors.currentFeature(state),
  isSelected:       selectors.isSelected(state),
  matchingProducts: selectors.matchingProducts(state),
  match:            selectors.match(state)
});

const homeActions = (dispatch) => ({
  fetchFeatures: (payload) => dispatch(actions.fetchFeatures(payload)),
  selectFeature: (payload) => dispatch(actions.selectFeature(payload)),
  ignoreFeature: (payload) => dispatch(actions.ignoreFeature(payload))
});

export default connect(homeState, homeActions)(Home);
