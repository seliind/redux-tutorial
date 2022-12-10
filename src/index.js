import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import userReducer from "./features/user"
import themaReducer from "./features/thema"
import peopleReducer  from './features/people';

const store = configureStore({
  reducer:{
    user:userReducer,
    thema:themaReducer,
    persons:peopleReducer,

  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
