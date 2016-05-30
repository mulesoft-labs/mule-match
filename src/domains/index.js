import { combineReducers } from 'redux';
import {
  actionTypes as featuresActionTypes,
  actions     as featuresActions,
  selectors   as featuresSelectors,
  reducers    as featuresReducers
} from './features';
import {
  selectors as productsSelectors,
  reducers  as productsReducers
} from './products';
import {
  selectors as uiSelectors,
  reducers  as uiReducers
} from './ui';

const actionTypes = {
  ...featuresActionTypes
};

const actions = {
  ...featuresActions
};

const selectors = {
  ...featuresSelectors,
  ...productsSelectors,
  ...uiSelectors
};

const reducers = combineReducers({
  features: featuresReducers,
  products: productsReducers,
  ui:       uiReducers
});

export {
  actionTypes,
  actions,
  reducers,
  selectors
};
