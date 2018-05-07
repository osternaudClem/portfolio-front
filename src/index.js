import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
