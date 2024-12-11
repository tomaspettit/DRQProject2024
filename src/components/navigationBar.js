// navigationBar.js

//IMPORTS
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/* 
    Logo home is for going to the home page ('/')
    Logo create is for going to the create page ('/create')
    Logo read is for going to the read page ('/read')
*/

// Function NavigationBar - Bootstrap , Handles Links
const NavigationBar = () => {
  return (
        <Navbar bg="success" data-bs-theme="dark">
          <Container>
            <Navbar.Brand><i>Gaming Navigation</i></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/"><img
              src="/image/home.png"
              width="30"
              height="30"
            /></Nav.Link>
              <Nav.Link href="/create"><img
              src="/image/create.png"
              width="30"
              height="30"
            /></Nav.Link>
              <Nav.Link href="/read"><img
              src="/image/read.png"
              width="30"
              height="30"
            /></Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

//Export to App.js
export default NavigationBar;