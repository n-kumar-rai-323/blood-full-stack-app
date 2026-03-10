import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './page/auth/login/login.page'
import "./assets/css/global.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <LoginPage/>
  </StrictMode>,
)
