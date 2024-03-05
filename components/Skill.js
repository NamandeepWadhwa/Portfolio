import Card from 'react-bootstrap/Card';
import {Image} from 'react-bootstrap';
export function Skill(props) {
  
  return (
    <Card >
      <Image variant="top" widht="25" height="25" className=" object-fit-contain img-fluid"src={process.env.NEXT_PUBLIC_SERVER+"/api/images/"+props.skills.imageUrl} />
      <Card.Body>
        <Card.Title>{props.skills.skill}</Card.Title>
      </Card.Body>
    </Card>
  );
}

