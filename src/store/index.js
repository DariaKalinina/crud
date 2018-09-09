import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer';
import randomId from '../middlewares/randomId';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(randomId));

const store = createStore(reducer, enhancer);

//dev only
window.store = store;

export default store;