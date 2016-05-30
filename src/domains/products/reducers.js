import { handleActions }  from 'redux-actions';
import { actionTypes }    from 'domains/features';

const reducers = handleActions({

  [actionTypes.SELECT_FEATURE]: (state = {}, action) => {
    const productHasFeature       = (product) => product.features.indexOf(action.payload.id) !== -1;
    const currentMatchingProducts = (state.matchingProducts || state.allProducts);
    const matchingProducts        = currentMatchingProducts.filter(productHasFeature);

    return {
      ...state,
      matchingProducts
    };
  }
}, []);

export default reducers;
