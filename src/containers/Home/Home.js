import { connect }  from 'react-redux';
import { Home }     from 'components';
import {
  actions,
  selectors
} from 'domains';

export const homeState = (state) => ({
  allProducts:    selectors.allProducts(state),
  currentProduct: selectors.currentProduct(state),
  isSelected:     selectors.isSelected(state)
});

export const homeActions = (dispatch) => ({
  selectProduct: (payload) => dispatch(actions.selectProduct(payload)),
  ignoreProduct: (payload) => dispatch(actions.ignoreProduct(payload))
});

export default connect(homeState, homeActions)(Home);
