import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style.css'
import MouseTracker from './Components/MouseTracker.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <MouseTracker />
  </StrictMode>,
)
