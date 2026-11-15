import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// Uklanjanje zaostalih podataka uklonjenog portala iz preglednika.
try {
  localStorage.removeItem('profa_portal_user');
} catch {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)