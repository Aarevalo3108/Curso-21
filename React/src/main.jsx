import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import App from './components/App'

// import './styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Nav/>
      <App />
      <footer>
        <h3>Todos los derechos reservados</h3>
        <h3>Contacto</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>Soporte</li>
        </ul>
      </footer>
    </BrowserRouter>
  </StrictMode>
)
