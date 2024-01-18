import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // runs DB call twice
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
