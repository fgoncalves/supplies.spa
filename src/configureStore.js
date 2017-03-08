import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const middleware = [
  thunkMiddleware
];

// TODO: Add production and development setups
// if (process.env.NODE_ENV !== 'production') {
//   const createLogger = require('redux-logger');
//   middleware.push(createLogger());
// }

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  const initialState = {}

  return createStoreWithMiddleware(combineReducers(reducer), initialState);
}
