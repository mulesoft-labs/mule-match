import { combineReducers } from 'redux';
import {
  actionTypes as featuresActionTypes,
  actions     as featuresActions,
  selectors   as featuresSelectors,
  reducers    as featuresReducers
} from './features';

const actionTypes = {
  ...featuresActionTypes
};

const actions = {
  ...featuresActions
};

const selectors = {
  ...featuresSelectors
};

const reducers = combineReducers({
  features: featuresReducers
});

export {
  actionTypes,
  actions,
  reducers,
  selectors
};
