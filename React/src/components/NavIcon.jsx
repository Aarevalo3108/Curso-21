


const NavIcon = ({titulo, funcion}) => {
  return (
    <li className='bg-orange-600 p-2 rounded-md' onClick={funcion}>{titulo}</li>
  )
}

export default NavIcon