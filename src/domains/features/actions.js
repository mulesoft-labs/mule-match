import { createAction } from 'redux-actions';
import actionTypes      from './actionTypes';

const actions = {
  fetchFeatures:  createAction(actionTypes.FETCH_FEATURES, async () => {
    const response = await fetch('http://mulesoft-info.cloudhub.io/features');
    return await response.json();
  }),
  selectFeature:  createAction(actionTypes.SELECT_FEATURE),
  ignoreFeature:  createAction(actionTypes.IGNORE_FEATURE)
};

export default actions;
