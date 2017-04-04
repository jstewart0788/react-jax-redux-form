import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import routes from './routes';
import './assets/styles/bootstrap/css/bootstrap.min.css';
import './assets/styles/index.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
