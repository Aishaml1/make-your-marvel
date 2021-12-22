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
      <Nav.Link><Link to="" onClick={handleLogout}>LOG OUT</Link></Nav.Link>
    </Nav>
      </Navbar>
    </>
        :
        <Navbar>
          <Nav  className='loginSignup'>
          <Nav.Link><Link to="/login">Log in</Link></Nav.Link> 
            <li><Link to="/signup" className='navbar'>Sign Up</Link></li>
          
          </Nav>
        </Navbar>
      }
    </>
    
  )
}

export default NavBar
