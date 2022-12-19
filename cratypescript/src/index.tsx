import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(store.getState())
root.render(
  <Provider store={store}>
  <Router><AppRouter/></Router></Provider>
);
