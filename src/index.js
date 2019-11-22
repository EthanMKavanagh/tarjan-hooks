import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

let counter = (state = 0, action) => {
  if(action.type === 'INCREMENT') {
    return state + 1
  }
  return state;
}

let store = createStore(
  combineReducers({
    counter
  }),
  applyMiddleware(logger)
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
