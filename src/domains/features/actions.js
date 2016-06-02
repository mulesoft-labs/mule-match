import { createAction }   from 'redux-actions';
import { featureService } from 'services';
import actionTypes        from './actionTypes';

const actions = {
  fetchFeatures:  createAction(actionTypes.FETCH_FEATURES, featureService.getFeatures),
  selectFeature:  createAction(actionTypes.SELECT_FEATURE),
  ignoreFeature:  createAction(actionTypes.IGNORE_FEATURE)
};

export default actions;
