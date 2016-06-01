import { applyMiddleware, createStore, compose }  from 'redux';
import promiseMiddleware                          from 'redux-promise';
import { reducers }                               from 'domains';

const defaultState = {};
const defaultEnhancers = applyMiddleware(promiseMiddleware);

const configureStore = ({
  initialState = defaultState,
  enhancers = []
}) => (
  createStore(
    reducers,
    initialState,
    compose(defaultEnhancers, enhancers)
  )
);

export default configureStore;
