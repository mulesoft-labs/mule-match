import { createAction } from 'redux-actions';

export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const IGNORE_PRODUCT = 'IGNORE_PRODUCT';

const actions = {
  selectProduct:  createAction(SELECT_PRODUCT),
  ignoreProduct:  createAction(IGNORE_PRODUCT)
};

export default actions;
