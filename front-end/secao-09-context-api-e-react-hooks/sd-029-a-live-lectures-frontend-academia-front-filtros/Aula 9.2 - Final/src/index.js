import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthProvider from './context/AuthProvider';
import AppProvider from './context/AppProvider';
import FilterProvider from './context/FilterProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <AppProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </AppProvider>
    </AuthProvider>
  </BrowserRouter>,
);
