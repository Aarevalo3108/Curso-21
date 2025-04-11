import NavIcon from "./NavIcon"


const Nav = () => {
  return (
    <nav className='text-xl text-center p-4 text-white'>
      <ul className='flex justify-between gap-4'>
        <NavIcon titulo="Inicio" funcion={() => console.log('Inicio')} />
        <NavIcon titulo="Servicios" funcion={() => console.log('Servicios')} />
        <NavIcon titulo="Blog" funcion={() => console.log('Blog')} />
        <NavIcon titulo="Contacto" funcion={() => console.log('Contacto')} />
      </ul>
    </nav>
  )
}

export default Nav