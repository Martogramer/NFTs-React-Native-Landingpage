
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './state/reducers/destinationReducers';

import './index.css';
import App from './App';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);