import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider >
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </ThemeProvider>

)
