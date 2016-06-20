import {
  actions     as featuresActions,
  actionTypes as featuresActionTypes,
  selectors   as featuresSelectors,
  reducers    as featuresReducers
} from './features';
import {
  actions     as productsActions,
  actionTypes as productsActionTypes,
  selectors   as productsSelectors,
  reducers    as productsReducers
} from './products';
import {
  selectors as uiSelectors,
  reducers  as uiReducers
} from './ui';

const actions = {
  ...featuresActions,
  ...productsActions
};

const actionTypes = {
  ...featuresActionTypes,
  ...productsActionTypes
};

const selectors = {
  ...featuresSelectors,
  ...productsSelectors,
  ...uiSelectors
};

const reducers = {
  features: featuresReducers,
  products: productsReducers,
  ui:       uiReducers
};

export {
  actionTypes,
  actions,
  reducers,
  selectors
};
