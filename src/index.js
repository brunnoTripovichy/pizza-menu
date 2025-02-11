import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create a root and render the App component under React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
// Start the root with the App component wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
