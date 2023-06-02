import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/auth.context';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mood Tracks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
            <button>Home</button> 
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/create-mood" className="nav-link">
                  Tell us how you are feeling today
                </Nav.Link>
                <button className="logout-button" onClick={logOutUser}>
                  Logout
                </button>
                <p>{user && user.name}</p>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <button className="auth-button">Join Us</button>
                </Link>
                <Link to="/login">
                  <button className="auth-button">Login</button>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
