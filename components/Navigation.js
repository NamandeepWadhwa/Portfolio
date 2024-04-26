import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import { readToken,removeToken } from '@/lib/user';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { sendEmail} from '@/lib/email';;



export default function Navigation() {
  const [show, setShow] = useState(false);
  const [userContact, setUserContact] = useState({name:'',email:'',message:''});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
let token=readToken();
const [isExpanded,setExpanded]=useState(false);

function onClickToggle(){
setExpanded(!isExpanded);
}
function onLinkClick(){
  setExpanded(false);
}

function logout(){
  onLinkClick();
  removeToken();
  setToken(null);

}
async function contactSubmit(){
  if(userContact.name=='' || userContact.email=='' || userContact.message==''){
    alert('Please fill all the fields');
  }
  else{
    let message="messaage: "+userContact.message+" email: "+userContact.email;
    const mailSend=await sendEmail(userContact.name,message);
    if(mailSend){
      alert('Mail sent');
      setUserContact({...userContact,name:'',email:'',message:''});
    }
    else{
      alert('Error in sending mail');
    }
  }
}

  return (
    <>
    <Navbar expand="md"  expanded={isExpanded}  suppressHydrationWarning={true}>
      <Container>
        <Link href="/" style={{ textDecoration: 'none' }}>
        <Navbar.Brand className="text-dark"  >
        <h4> 
      
        <Image src="/Logo.jpeg" alt="Namandeep Singh" width="50" height="50" className="rounded-circle border border-dark" /> &nbsp;
            
          Namandeep Singh</h4></Navbar.Brand>
            </Link>
        <Navbar.Toggle aria-controls="bar-nav" onClick={(e)=>onClickToggle()}/>
        <Navbar.Collapse id="bar-nav">
      
        <Nav className="ms-auto">
          <Nav.Link href="/"  className=" text-decoration-none text-dark m-3"  onClick={onLinkClick}><h4>Home </h4> </Nav.Link>
         
          <Nav.Link href="#" className=" text-decoration-none text-dark m-3" onClick={(e)=>handleShow()} ><h4>Contact</h4></Nav.Link>
          {!token && <Nav.Link href="/admin" className=" text-decoration-none text-dark m-3" ><h4>Login</h4></Nav.Link> } 
         {token && <Nav.Link href="/projects" className=" text-decoration-none text-dark m-3" ><h4>Project</h4></Nav.Link> }
         {token && <Nav.Link href="/skills" className=" text-decoration-none text-dark m-3" ><h4>Skills</h4></Nav.Link> }
         {token && <Nav.Link href="/admin/adminRegister" className=" text-decoration-none text-dark m-3" ><h4>Regiser a Admin</h4></Nav.Link> }
         {token && <Nav.Link href="/admin" className=" text-decoration-none text-dark m-3"  onClick={logout}><h4>Logout</h4></Nav.Link> }
       

        </Nav>
       </Navbar.Collapse>
      
      </Container>
    </Navbar>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>You can reach me at naman23156@gmail.com or you can fill the form and I will reach out to you asap</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="name" className="form-label text-dark">Name</label>
          <input type="text" className="form-control " id="name"  onChange={(e)=>setUserContact({...userContact,name:e.target.value})}
          value={userContact.name}/>
          <label htmlFor="email" className="form-label" >Email</label>
          <input type="email" className="form-control" id="email" onChange={(e)=>setUserContact({...userContact,email:e.target.value})} 
          value={userContact.email}/>
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" onChange={(e)=>setUserContact({...userContact,message:e.target.value})}
          value={userContact.message}></textarea>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="btn btn-dark" onClick={contactSubmit}>Submit</Button>
          <Button variant="btn btn-dark" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}