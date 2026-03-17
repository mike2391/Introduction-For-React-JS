import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Welcome from './welcome.jsx'

createRoot(document.getElementById('root')).render(
  // This App is default components that Vite made, for now we comment it
  // Let's import our components -> welcome component
  
  <StrictMode>
    {/* <App /> */}
    <Welcome />
  </StrictMode>,

)
