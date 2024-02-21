import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Project(Project) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Project.imgURL}  />
      <Card.Body>
        <Card.Title>{Project.title}</Card.Title>
        <Card.Text>
         {Project.description}
        </Card.Text>
        <Button variant="dark">Github{Project.links}</Button>
      </Card.Body>
    </Card>
  );
}

