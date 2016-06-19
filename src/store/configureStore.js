import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import promiseMiddleware                                          from 'redux-promise';
import { reducer as reduxAsyncReducer }                           from 'redux-connect';
import { reducers }                                               from 'domains';

const defaultState = {};
const defaultEnhancers = applyMiddleware(promiseMiddleware);

const configureStore = ({
  initialState = defaultState,
  enhancers = []
}) => (
  createStore(
    combineReducers({ ...reducers, reduxAsyncConnect: reduxAsyncReducer }),
    initialState,
    compose(defaultEnhancers, enhancers)
  )
);

export default configureStore;
