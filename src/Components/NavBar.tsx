import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className='portfolio-navbar' fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='portfolio-navbar-link' href="#project">Project</Nav.Link>
            <Nav.Link className='portfolio-navbar-link' href="#timeline">Timeline</Nav.Link>
            <Nav.Link className='portfolio-navbar-link' href="#link">About Me</Nav.Link>
          </Nav>
          <Button 
            className="ms-auto portfolio-navbar-button" 
            href="/path/to/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            
          >
            Download Resume
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
