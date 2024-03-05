import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Project(props) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.NEXT_PUBLIC_SERVER+"/api/images/"+props.project.imageUrl} />
      <Card.Body>
        <Card.Title>{props.project.title}</Card.Title>
        <Card.Text className="text-dark bg-white">
          {props.project.description}
        </Card.Text>
        <Button variant="btn btn-dark" ><a href={props.project.link} className="text-decoration-none text-reset">Git-hub</a></Button>
      </Card.Body>
    </Card>
  );
}

