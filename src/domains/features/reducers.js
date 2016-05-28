import { handleActions }  from 'redux-actions';
import {
  SELECT_FEATURE,
  IGNORE_FEATURE
} from './actions';

const reducers = handleActions({

  [SELECT_FEATURE]: (state = {}, action) => {
    const selectedFeature   = state.allFeatures.find((item) => item.title ===  action.payload.title);
    const allFeatures       = state.allFeatures.filter((item) => item.title !==  action.payload.title);
    const selectedFeatures  = [
      ...(state.selectedFeatures || []),
      selectedFeature
    ];

    return {
      ...state,
      allFeatures,
      selectedFeatures
    };
  },

  [IGNORE_FEATURE]: (state = {}, action) => {
    const allFeatures = state.allFeatures.filter((item) => item.title !==  action.payload.title);

    return {
      ...state,
      allFeatures
    };
  }
}, []);

export default reducers;
