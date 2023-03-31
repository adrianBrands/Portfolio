import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
/*export default function Header(){
  return <header className="header text-white">
    <Container className="d-flex justify-content-between">
      <p className="fs-3">1</p>
      <p className="fs-3">2</p>
      <p className="fs-3">3</p>
    </Container>
  </header>
}*/

export default function Header(){
  return (
    <Navbar expand="lg" variant="light"  bg="light">
      <Container className="text-white">
        <Navbar.Brand href="#">Welcome</Navbar.Brand>
        <Navbar.Text>welcome</Navbar.Text>
      </Container>
    </Navbar>
  );
}