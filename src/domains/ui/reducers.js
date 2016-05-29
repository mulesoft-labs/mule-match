import { handleActions }  from 'redux-actions';
import { actionTypes }    from 'domains/features';

const reducers = handleActions({

  [actionTypes.SELECT_FEATURE]: (state = {}) => ({
    ...state,
    isSelected: true
  }),

  [actionTypes.IGNORE_FEATURE]: (state = {}) => ({
    ...state,
    isSelected: false
  })
}, []);

export default reducers;
