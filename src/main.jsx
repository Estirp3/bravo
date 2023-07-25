import React from 'react';
import reactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ContenidoApp from './ContenidoApp';
import './style.css';




reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <BrowserRouter>
      <ContenidoApp />
    </BrowserRouter>
  </React.StrictMode>,
)