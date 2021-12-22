import { Link } from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../styles/Nav.scss'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>

      {user ?
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="{ }"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          React Bootstrap
          </Navbar.Brand>
        </Container>
        <Nav className="me-auto">
      <Nav.Link><Link to="/characterSearch">Search</Link></Nav.Link>
      <Nav.Link><Link to="/profile">My Profile</Link></Nav.Link>
      <Nav.Link><Link to="/profiles">All Profile</Link></Nav.Link>
      <Nav.Link><Link to="/profile">My Profile</Link></Nav.Link> 
    </Nav>
      </Navbar>
    </>
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
