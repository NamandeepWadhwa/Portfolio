import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
export function Project(props) {
  
  return (
    <Card style={{minWidth:600}} >
      <Card.Body>
        <Card.Title>{props.project.title}</Card.Title>
        <Card.Text className="text-dark bg-white">
          {props.project.description}
        </Card.Text>
        <Button variant="btn btn-dark" ><a href={props.project.link} className="text-decoration-none text-reset">GitHub/LiveLink</a></Button>
      </Card.Body>
    </Card>
  );
}

