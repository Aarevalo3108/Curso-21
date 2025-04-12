import { Home, Services, Contact, Login, Blog } from "./pages/_routes"
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <main className="p-4 flex flex-col gap-4 justify-center items-center min-h-[50vh]">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<h1 className="text-4xl text-center">No existe esa pagina 404</h1>} />
    </Routes>
    </main>
  )
}

export default App