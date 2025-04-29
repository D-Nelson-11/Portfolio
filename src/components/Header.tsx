import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
   <Navbar expand="lg" variant="dark" fixed="top" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <Container>
          <Navbar.Brand href="#">DN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">Sobre mí</Nav.Link>
              <Nav.Link href="#proyectos">Proyectos</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="header" style={{ paddingTop: "80px" }}>
        <div
          style={{
            margin: "20px auto",
            border: "1px solid white",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "10px",
            width: "30%",
          }}>
          <h1>David Nelson</h1>
          <p style={{ fontSize: "20px" }}>Desarrollador Web</p>
        </div>
      </header>
    </>
  );
};

export default Header;
