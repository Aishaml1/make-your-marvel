import { Link } from 'react-router-dom'
import '../../styles/Nav.scss'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul className='menu-bar' >
          <li>
            <Link to="/" className='logo'>
            <img src={'mym.jpeg'} alt="Girl in a jacket" width="500" height="600">
            </img></Link></li>
            <li className='welcome'>Welcome, {user.name} </li>
            <li><Link to="/" className='navbar' >Search</Link></li>
            <li><Link to="/profile" className='navbar' >My Profile</Link></li>
            <li><Link to="/profiles" className='navbar' > All Profiles</Link></li>
            <li><Link to="" className='navbar' onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
        :
        <nav>
          <ul className='loginSignup' >
            <li><Link to="/login" className='navbar'>Log In</Link></li>
            <li><Link to="/signup" className='navbar'>Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
