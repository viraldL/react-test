import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

window.addEventListener("load",() => {
  alert("⚠YOUR COMPUTER HAS A VIRUS!!!⚠")
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
