import { createAction } from 'redux-actions';

export const SELECT_FEATURE = 'SELECT_FEATURE';
export const IGNORE_FEATURE = 'IGNORE_FEATURE';

const actions = {
  selectFeature:  createAction(SELECT_FEATURE),
  ignoreFeature:  createAction(IGNORE_FEATURE)
};

export default actions;
