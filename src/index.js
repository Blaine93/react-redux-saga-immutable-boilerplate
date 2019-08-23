import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './lib/bootstrap/bootstrap.min.css';
import './lib/bootstrap/bootstrap-theme.min.css';
import { App } from './components/App';
import configureStore from './configureStore';
import './style.css';

const history = createBrowserHistory();
const store = configureStore(history);

const appRootDomElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  appRootDomElement
);
