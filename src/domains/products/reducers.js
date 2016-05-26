import { handleActions }  from 'redux-actions';
import {
  SELECT_PRODUCT,
  IGNORE_PRODUCT
} from './actions';

const reducers = handleActions({

  [SELECT_PRODUCT]: (state = {}, action) => {
    const itemIndex   = state.allProducts.findIndex((item) => item.title ===  action.payload.title);
    const allProducts = [
      ...state.allProducts.slice(0, itemIndex),
      {
        ...state.allProducts[itemIndex],
        selected: true
      },
      ...state.allProducts.slice(itemIndex + 1)
    ];
    const selectedProducts = allProducts.filter((item) => item.selected);

    return {
      ...state,
      allProducts,
      selectedProducts
    };
  },

  [IGNORE_PRODUCT]: (state = {}, action) => {
    const ignoredProduct  = state.allProducts.find((item) => item.title ===  action.payload.title);
    const otherProducts   = state.allProducts.filter((item) => item.title !==  action.payload.title);
    const allProducts     = [
      ...otherProducts,
      {
        ...ignoredProduct,
        selected: false
      }
    ];
    const selectedProducts = allProducts.filter((item) => item.selected);

    return {
      ...state,
      allProducts,
      selectedProducts
    };
  }
}, []);

export default reducers;
