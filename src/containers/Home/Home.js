import { connect }  from 'react-redux';
import { Home }     from 'components';
import async        from 'containers/async';
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
  selectFeature: (payload) => dispatch(actions.selectFeature(payload)),
  ignoreFeature: (payload) => dispatch(actions.ignoreFeature(payload))
});

const resolve = ({ dispatch }) => {
  // Initialize features and products
  const featuresPromise = dispatch(actions.fetchFeatures());
  const productsPromise = dispatch(actions.fetchProducts());

  return Promise.all([featuresPromise, productsPromise]);
};

export default async(resolve)(connect(homeState, homeActions)(Home));
