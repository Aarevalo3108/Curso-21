import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Services,
  Contact,
  Login,
  Blog,
} from "./components/pages/_routes";
import Nav from "./components/general/navbar/Nav";

/**
 * @author Juan Rodriguez
 * @description manages the routes for the application
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="*"
          element={
            <h1 className="text-4xl text-center">No existe esa pagina 404</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

/*
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
*/
