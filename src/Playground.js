// Import Dependencies
import React    from 'react';
import ReactDOM from 'react-dom';

// Set up development enhancers for redux store
const enhancers = window.devToolsExtension ? window.devToolsExtension() : (createStore) => createStore;

const rootEl = document.getElementById('root');

let render = () => {
  // eslint-disable-next-line global-require
  const App = require('./App').default;
  ReactDOM.render(
    <App enhancers={enhancers} />,
    rootEl);
};

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render;
  const renderError = (error) => {
    // eslint-disable-next-line global-require
    const RedBox = require('redbox-react');
    ReactDOM.render(<RedBox error={error} />, rootEl);
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  // Enable Webpack hot module replacement for App
  module.hot.accept('./App', () => {
    setTimeout(render);
  });

  // Enable Webpack hot module replacement for reducers
  // module.hot.accept('./reducers', () => {
  //   const nextReducer = require('./reducers/index').default;
  //   store.replaceReducer(nextReducer);
  // });
}

render();
