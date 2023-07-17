import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// using our store 
import { Provider } from 'react-redux';
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);


// Enable Redux DevTools extension
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  window.__REDUX_DEVTOOLS_EXTENSION__();
}