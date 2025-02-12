// https://script.google.com/macros/s/AKfycbzRkc9uXuWFZ0c5JVGQto4_aavr1ohDxFYS_G4UL62CZ5RM43BWnDRBzF54DPZNHELcTg/exec
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
