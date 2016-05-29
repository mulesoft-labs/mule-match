import { handleActions }  from 'redux-actions';
import actionTypes        from './actionTypes';

const reducers = handleActions({

  [actionTypes.SELECT_FEATURE]: (state = {}, action) => {
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

  [actionTypes.IGNORE_FEATURE]: (state = {}, action) => {
    const allFeatures = state.allFeatures.filter((item) => item.title !==  action.payload.title);

    return {
      ...state,
      allFeatures
    };
  }
}, []);

export default reducers;
