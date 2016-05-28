import { combineReducers } from 'redux';
import {
  actions   as featuresActions,
  selectors as featuresSelectors,
  reducers  as featuresReducers
} from './features';

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
  actions,
  reducers,
  selectors
};
