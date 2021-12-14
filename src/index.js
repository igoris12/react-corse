import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './Componets/App';
import './css/reduxStudy.scss';
import { Provider } from 'react-redux';
import { store } from './Componets/Redux/store';





ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

