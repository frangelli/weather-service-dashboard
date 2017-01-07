import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

require('../styles/main.scss');
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById('app')
);
