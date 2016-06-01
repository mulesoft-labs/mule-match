import { createAction } from 'redux-actions';
import actionTypes      from './actionTypes';

const actions = {
  fetchProducts:  createAction(actionTypes.FETCH_PRODUCTS, async () => {
    const response = await fetch('http://mulesoft-info.cloudhub.io/products');
    return await response.json();
  })
};

export default actions;
