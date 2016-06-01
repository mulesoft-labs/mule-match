import 'babel-polyfill';
import React              from 'react';
import { Provider }       from 'react-redux';
import { Home }           from 'containers';
import { configureStore } from './store';

// Main component for this application
const App = ({
  initialState,
  enhancers
}) => {
  const store = configureStore({ initialState, enhancers });
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

App.propTypes = { initialState: React.PropTypes.object, enhancers: React.PropTypes.func };
export default App;
