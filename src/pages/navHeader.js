import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo1 from "./../aset/Logo1.jpg"


function navHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
        <img
              src={Logo1}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt='logo taekwondo'
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/sejarah">Sejarah Taekwondo Salatiga</Nav.Link>
            <Nav.Link href="/kepengurusan">Kepengurusan</Nav.Link>
            <Nav.Link href="/dojang">Dojang</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navHeader;