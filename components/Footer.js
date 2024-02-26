
import Card from 'react-bootstrap/Card';
import Image from 'next/image';



function Footer() {
  return (

    <Card className="text-center ">
     
      <Card.Body className="border border-0">
        <Card.Title>Links</Card.Title>
        <h5>
        <Card.Text>
       Checkout my github and connect with me on linkedin
        </Card.Text>
        </h5>
        <a href='#'>
        <Image src="/githublogo.png" alt="Github logo" width={100} height={100} className=" border border-0
          object-fit-contain border rounded" />
        </a>
        <a href='#'>
        <Image src="/linkedinlogo.png" alt="Linkedin logo" width={100} height={100} className=" border border-0
          object-fit-contain border rounded" />
        </a>
      
      </Card.Body>
    
    </Card>
  );
}

export default Footer;