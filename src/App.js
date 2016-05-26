import 'babel-polyfill';
import React        from 'react';
import { Provider } from 'react-redux';

// Import Containers
import { Home } from 'containers';

// Configure the redux store
import { configureStore } from './store';

// The main component for this application
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
