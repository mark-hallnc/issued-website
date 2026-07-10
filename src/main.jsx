import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { restoreGithubPagesRoute } from './utils/githubPagesRedirect.js'
import './index.css'

restoreGithubPagesRoute()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
