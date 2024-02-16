import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import BasicExample from '@/components/Project';


export default function Home(props) {
  return (
    <>
   
      <Row>
        <Col md={6} className="justify-content-center my-5">
          
          <Image src="/Logo.jpeg" alt="Namandeep Singh" width="50%" height="50%" className=" rounded mx-auto d-block border border-0
          object-fit-contain border rounded" /><br />
          <Row>

        
          <Col md={12}>
          <a href="/Logo.jpeg" download="Namandeep Singh" className="text-decoration-none">
          <Button variant="dark" size="lg" className="rounded mx-auto d-block">
      Resume
      </Button>
      </a>
            </Col>
            </Row>
       
        </Col>
        <Col Col md={6} className=" my-5">
          <h1>About me</h1>
          <h4><p>
            I am Namandeep Singh Wadhwa, currently pursuing an Advanced Diploma in Computer Programming and Analysis at Seneca College. My academic journey has ignited a passion for both web development and software development. I am dedicated to continuously refining my skills in these areas. Proficient in the MERN stack and Next.js, I also have experience in JavaScript (ES6), C++, and OPEN MP for parallel programming.
            </p>
            </h4>
        
        </Col>
      </Row>
  
    
   </>
  );
}