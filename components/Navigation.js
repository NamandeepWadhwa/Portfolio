import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';



export default function Navigation() {
  return (
    <>
    <Navbar expand="md" >
      <Container>
        <Link href="/" style={{ textDecoration: 'none' }}>
        <Navbar.Brand className="text-dark"  >
        <h4> 
      
        <Image src="/Logo.jpeg" alt="Namandeep Singh" width="50" height="50" className="rounded-circle border border-dark" /> &nbsp;
            
          Namandeep Singh</h4></Navbar.Brand>
            </Link>
        <Navbar.Toggle aria-controls="bar-nav" />
        <Navbar.Collapse id="bar-nav">
      
        <Nav className="ms-auto">
          <Nav.Link href="/"  className=" text-decoration-none text-dark m-3" ><h4>Home </h4> </Nav.Link>
         
          <Nav.Link href="#" className=" text-decoration-none text-dark m-3" ><h4>Contact</h4></Nav.Link>
          <Nav.Link href="#" className=" text-decoration-none text-dark m-3" ><h4>Admin login</h4></Nav.Link>
        </Nav>
       </Navbar.Collapse>
      
      </Container>
    </Navbar>
    </>
  );
}