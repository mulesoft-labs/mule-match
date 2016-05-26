import { combineReducers } from 'redux';
import {
  actions   as productsActions,
  selectors as productsSelectors,
  reducers  as productsReducers
} from './products';

const actions = {
  ...productsActions
};

const selectors = {
  ...productsSelectors
};


const reducers = combineReducers({
  products: productsReducers
});

export {
  actions,
  reducers,
  selectors
};
