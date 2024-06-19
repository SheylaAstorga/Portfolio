import Logo from "../../assets/logo2.png";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="navBar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="logo" width={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <NavLink end className="Nav-link mx-2" to="/">
                Inicio
              </NavLink>
              <NavLink className="Nav-link mx-2" to="/proyectos">
                Proyectos
              </NavLink>

              <span className="navbar-text ">
                <div className="social-icon ">
                  <a
                    className="NavLink"
                    href="https://github.com/SheylaAstorga"
                    target="_blank"
                  >
                    <i className="bi bi-github logo-git fs-4 me-3 ms-3"></i>
                  </a>
                  <a
                    className="NavLink"
                    target="_blank"
                    href="https://www.linkedin.com/in/sheyla-luciana-astorga-40013a248/"
                  >
                    <i className="bi bi-linkedin logo-link fs-4"></i>
                  </a>
                </div>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
