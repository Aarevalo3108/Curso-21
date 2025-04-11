import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'

// import './styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <h1 className='bg-blue-600 text-2xl text-center p-4 rounded-2xl text-white'>Hola mundo</h1>
    <main>
      <h2>Seccion 1</h2>
      <h2>Seccion 2</h2>
      <h2>Seccion 3</h2>
      <h2>Seccion 4</h2>
    </main> 
    <footer>
      <h2>Footer</h2>
      <ul>
        <p>Copyright 2023</p>
        <p>Terminos y condiciones</p>
      </ul>
    </footer>
  </StrictMode>
)
