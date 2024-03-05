import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
export function Project(props) {
  
  return (
    <Card >
      <Image variant="top" widht="50" height="250" calssName=" object-fit-cover img-fluid" src={process.env.NEXT_PUBLIC_SERVER+"/api/images/"+props.project.imageUrl} />
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

