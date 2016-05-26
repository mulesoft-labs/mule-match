import { connect }  from 'react-redux';
import { Home }     from 'components';
import {
  actions,
  selectors
} from 'domains';

export const homeState = (state) => ({
  unselectedProducts: selectors.unselectedProducts(state),
  currentProduct:     selectors.currentProduct(state)
});

export const homeActions = (dispatch) => ({
  selectProduct: (payload) => dispatch(actions.selectProduct(payload)),
  ignoreProduct: (payload) => dispatch(actions.ignoreProduct(payload))
});

export default connect(homeState, homeActions)(Home);
