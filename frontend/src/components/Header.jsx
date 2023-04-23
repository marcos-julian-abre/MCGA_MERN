import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Metas</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'> 
                <FaSignInAlt/> Ingresar
                </Link>
            </li>
            <li>
                <Link to='/register'> 
                <FaUser/> Registrarse
                </Link>
            </li>
        </ul>
    </header>

  )
}

export default Header