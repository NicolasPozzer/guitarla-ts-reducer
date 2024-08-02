import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'


// Assertion not null o non null assertion operator se llama el "!" que esta antes de render,
//con este "!" es una forma de decirle a typescript que el valor no va a ser null y asi evitar errores
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


