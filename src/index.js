import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import index from './store';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={index}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
