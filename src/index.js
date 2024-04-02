import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
