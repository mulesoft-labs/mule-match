import 'babel-polyfill';
import React                              from 'react';
import { Router, Route, browserHistory }  from 'react-router';
import { Provider }                       from 'react-redux';
import { ReduxAsyncConnect }              from 'redux-connect';
import { Home }                           from 'containers';
import { configureStore }                 from './store';

// Main component for this application
const App = ({
  initialState,
  enhancers
}) => {
  const store = configureStore({ initialState, enhancers });
  return (
    <Provider store={store} key="provider">
      <Router history={browserHistory} render={(props) => <ReduxAsyncConnect {...props} />}>
        <Route path="/" component={Home} />
      </Router>
    </Provider>
  );
};

App.propTypes = { initialState: React.PropTypes.object, enhancers: React.PropTypes.func };
export default App;
