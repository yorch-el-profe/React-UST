import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, 1000);