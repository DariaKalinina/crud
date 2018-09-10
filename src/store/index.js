import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer';
import randomId from '../middlewares/randomId';
import fetch from '../middlewares/fetch';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(randomId, fetch));

const store = createStore(reducer, enhancer);

//dev only
window.store = store;

export default store;