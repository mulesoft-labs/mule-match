import { handleActions }                      from 'redux-actions';
import { actionTypes as featuresActionTypes } from 'domains/features';
import actionTypes                            from './actionTypes';

const reducers = handleActions({

  [actionTypes.FETCH_PRODUCTS]: {
    next(state = {}, action) {
      const allProducts       = action.payload;
      const matchingProducts  = null;

      return {
        ...state,
        allProducts,
        matchingProducts
      };
    }
  },

  [featuresActionTypes.SELECT_FEATURE]: (state = {}, action) => {
    const productHasFeature       = (product) => product.features.indexOf(action.payload.id) !== -1;
    const currentMatchingProducts = state.matchingProducts || state.allProducts;
    const matchingProducts        = currentMatchingProducts.filter(productHasFeature);

    return {
      ...state,
      matchingProducts
    };
  }
}, []);

export default reducers;
