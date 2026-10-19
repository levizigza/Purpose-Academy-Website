import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/fraunces/wght.css'
import '@fontsource-variable/fraunces/wght-italic.css'
import '@fontsource-variable/source-sans-3/wght.css'
import '@fontsource-variable/source-sans-3/wght-italic.css'
import App from './App'
import './styles.css'

const root = document.getElementById('root')
if (!root) throw new Error('Root element missing')

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
