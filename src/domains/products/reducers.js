import { handleActions }  from 'redux-actions';
import {
  SELECT_PRODUCT,
  IGNORE_PRODUCT
} from './actions';

const reducers = handleActions({

  [SELECT_PRODUCT]: (state = {}, action) => {
    const product           = state.allProducts.find((item) => item.title ===  action.payload.title);
    const allProducts       = state.allProducts.filter((item) => item.title !==  action.payload.title);
    const selectedProducts  = [
      ...(state.selectedProducts || []),
      product
    ];

    return {
      ...state,
      allProducts,
      selectedProducts,
      isSelected: true
    };
  },

  [IGNORE_PRODUCT]: (state = {}, action) => {
    const allProducts = state.allProducts.filter((item) => item.title !==  action.payload.title);

    return {
      ...state,
      allProducts,
      isSelected: false
    };
  }
}, []);

export default reducers;
