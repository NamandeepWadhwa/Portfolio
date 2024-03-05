import Card from 'react-bootstrap/Card';

export function Skill(props) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.NEXT_PUBLIC_SERVER+"/api/images/"+props.skills.imageUrl} />
      <Card.Body>
        <Card.Title>{props.skills.skill}</Card.Title>
      </Card.Body>
    </Card>
  );
}

