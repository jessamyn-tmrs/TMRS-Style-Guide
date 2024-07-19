import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>test</h1>
    <App />
  </React.StrictMode>
);


