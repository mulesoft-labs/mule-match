import { connect }  from 'react-redux';
import { Home }     from 'components';
import {
  actions,
  selectors
} from 'domains';

export const homeState = (state) => ({
  allFeatures:    selectors.allFeatures(state),
  currentFeature: selectors.currentFeature(state),
  lastAction:     selectors.isSelected(state)
});

export const homeActions = (dispatch) => ({
  selectFeature: (payload) => dispatch(actions.selectFeature(payload)),
  ignoreFeature: (payload) => dispatch(actions.ignoreFeature(payload))
});

export default connect(homeState, homeActions)(Home);
