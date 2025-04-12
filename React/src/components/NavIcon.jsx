import { Link } from "react-router-dom"


const NavIcon = ({titulo, funcion,link}) => {
  return (
    <li className='bg-orange-600 p-2 rounded-md' onClick={funcion}>
      <Link to={link}>{titulo}</Link>
    </li>
  )
}

export default NavIcon