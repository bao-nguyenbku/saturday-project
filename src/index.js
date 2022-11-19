import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/app';
import Update from './components/updateRoom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      {/* <App /> */}
      <Update />
    </AppProvider>
  </React.StrictMode>
);
