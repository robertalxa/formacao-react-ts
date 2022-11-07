import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Router from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
  document.getElementById('root')
);
