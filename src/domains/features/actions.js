import { createAction } from 'redux-actions';
import actionTypes from './actionTypes';

const actions = {
  selectFeature:  createAction(actionTypes.SELECT_FEATURE),
  ignoreFeature:  createAction(actionTypes.IGNORE_FEATURE)
};

export default actions;
