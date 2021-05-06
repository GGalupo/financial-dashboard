import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from './hooks/theme'
import { AuthProvider } from './hooks/auth'
import { MenuProvider } from './hooks/menu'

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
