import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import { LANGUAGES } from '../../constants';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


function NavBar() {


  const { i18n, t } = useTranslation('navbar');

  const onChangeLang = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
  };

  return (
    <Navbar expand="lg" className='portfolio-navbar ' fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='portfolio-navbar-link' href="/portfolio/#project">{t("projects")}</Nav.Link>
            <Nav.Link className='portfolio-navbar-link' href="/portfolio/#timeline">{t("timeline")}</Nav.Link>
            <Nav.Link className='portfolio-navbar-link' href="/portfolio/#about_me">{t("about me")}</Nav.Link>
          </Nav>
          {/* <Button 
            className="ms-auto portfolio-navbar-button" 
            href="/path/to/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            
          > 
            Download Resume
          </Button> */}
          <Dropdown>
      <Dropdown.Toggle className='language-dropdown' id="dropdown-basic">
        {t("language")}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {LANGUAGES.map(({code, label}, index) => (
          <Dropdown.Item key={index} onClick={() => onChangeLang(code)}>{t(label)}</Dropdown.Item>
        ))}
        
      </Dropdown.Menu>
    </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
