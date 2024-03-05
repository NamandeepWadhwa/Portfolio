import Card from 'react-bootstrap/Card';

export function Skill(props) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:"35vh"}} className=" object-fit-cover img-fluid"src={process.env.NEXT_PUBLIC_SERVER+"/api/images/"+props.skills.imageUrl} />
      <Card.Body>
        <Card.Title>{props.skills.skill}</Card.Title>
      </Card.Body>
    </Card>
  );
}

