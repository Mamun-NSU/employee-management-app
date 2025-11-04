import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Left-aligned brand */}
        <Navbar.Brand as={Link} to="/">Employee App</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Right-aligned nav links */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/create" className="me-3">Create</Nav.Link>
            <Nav.Link as={Link} to="/show">Show</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


// // Left sided Navbar

// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">Employee App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/create">Create</Nav.Link>
//             <Nav.Link as={Link} to="/show">Show</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
