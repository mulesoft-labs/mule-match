import { createAction }   from 'redux-actions';
import { productService } from 'services';
import actionTypes        from './actionTypes';

const actions = {
  fetchProducts:  createAction(actionTypes.FETCH_PRODUCTS, productService.getProducts)
};

export default actions;
