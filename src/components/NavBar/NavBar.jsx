import { Link } from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap';
import '../../styles/Nav.css'
import mymNav from '../../assets/images/mymNav.png'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>

      {user ?
      <>
      <Navbar variant="dark" className='color-nav'>
        <Container>
          <Navbar.Brand style={{color: "red"}}>
            <Link to="/">
            <img 
              alt=""
              src={mymNav}
              width="50px"
              height="30vh"
              className="d-inline-block align-top"
            />
            </Link> Hey, {user.name} !! </Navbar.Brand>
        </Container>
        <Nav className="navLinks">
      <Nav.Link><Link to="/characterSearch" className="navLink">Search</Link></Nav.Link>
      <Nav.Link><Link to="/profile" className="navLink" >My Profile</Link></Nav.Link>
      <Nav.Link><Link to="" onClick={handleLogout} className="navLink">LOG OUT</Link></Nav.Link>
    </Nav>
      </Navbar>
    </>
        :
        <Navbar variant="dark" className='color-nav'>
        <Container>
          <Navbar.Brand style={{color: "red"}}>
            <Link to="/">
            <img 
              alt=""
              src={mymNav}
              width="50px"
              height="30vh"
              className="d-inline-block align-top"
            />
            </Link> Welcome </Navbar.Brand>
        </Container>
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
