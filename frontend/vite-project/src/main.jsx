import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/index.css";
import { GlobalProvider } from './back-connection/global.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
        <App />
    </GlobalProvider>

  </React.StrictMode>,
)


