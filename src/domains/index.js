import { combineReducers } from 'redux';
import {
  actions   as productsActions,
  reducers  as productsReducers,
  selectors as productsSelectors
} from './products';

const actions = {
  ...productsActions
};

const reducers = combineReducers({
  products: productsReducers
});

const selectors = {
  ...productsSelectors
};

export {
  actions,
  reducers,
  selectors
};
