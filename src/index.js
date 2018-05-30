/*eslint-disable*/
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import registerServiceWorker from './registerServiceWorker';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const logger = store => next => (action) => {
  console.log('[Middleware] Dispatching', action);
  const result = next(action);
  console.log('[Middleware] next state', store.getState());
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter><Component/></BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp(App);
registerServiceWorker();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp(require('./app').default);
  });
}
