import { Link } from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../styles/Nav.css'
import mymNav from '../../assets/images/mymNav.png'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>

      {user ?
      <>
      <Navbar bg="dark" variant="dark" className='nav'>
        <Container>
          <Navbar.Brand ><Link to="/">
            <img 
              alt=""
              src={mymNav}
              width="50px"
              height="30vh"
              className="d-inline-block align-top"
            />{' '}
            
            </Link>Welcome, {user.name} </Navbar.Brand>
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
        <Navbar bg="dark" variant="dark">
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
