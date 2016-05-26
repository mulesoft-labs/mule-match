import { handleActions }  from 'redux-actions';
import {
  SELECT_PRODUCT,
  IGNORE_PRODUCT
} from './actions';

const reducers = handleActions({

  [SELECT_PRODUCT]: (state, action) => {
    const i = state.findIndex((item) => item.title ===  action.payload.title);
    return [
      ...state.slice(0, i), // before the one we are updating
      {
        ...state[i],
        selected: true
      },
      ...state.slice(i + 1) // after the one we are updating
    ];
  },

  [IGNORE_PRODUCT]: (state, action) => {
    const itemToIgnore  = state.find((item) => item.title === action.payload.title);
    const filteredItems = state.filter((item) => item.title !== action.payload.title);

    // Return the same items but move the ignored item to the end
    return [
      ...filteredItems,
      {
        ...itemToIgnore,
        selected: false
      }
    ];
  }
}, []);

export default reducers;
