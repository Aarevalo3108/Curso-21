import NavIcon from "./NavIcon"
import { useState } from "react"



const Nav = () => {

  const [theme, setTheme] = useState("light")
  // Estado: nombre y modificador

  console.log(theme);

  return (
    <nav className={`p-4 flex ${theme === "light" ? "bg-slate-400 text-black" : "bg-slate-800 text-white"}`}>
      <ul className='flex w-full justify-between gap-4'>
        <NavIcon link={"/"} titulo="Inicio" funcion={() => console.log('Inicio')} />
        <NavIcon link={"/services"} titulo="Servicios" funcion={() => console.log('Servicios')} />
        <NavIcon link={"/contact"} titulo="Contacto" funcion={() => console.log('Contacto')} />
        <NavIcon link={"/login"} titulo="Login" funcion={() => console.log('Blog')} />
        <NavIcon link={"/blog"} titulo="Blog" funcion={() => console.log('Blog')} />
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Cambiar Tema</button>
      </ul>
    </nav>
  )
}

export default Nav