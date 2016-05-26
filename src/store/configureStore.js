import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import thunk    from 'redux-thunk';
import { reducers } from 'domains';

const defaultState = {};
const defaultEnhancers = compose(applyMiddleware(thunk));

const configureStore = ({
  initialState = defaultState,
  enhancers = []
}) => createStore(
  reducers,
  initialState,
  compose(enhancers, defaultEnhancers));

export default configureStore;
