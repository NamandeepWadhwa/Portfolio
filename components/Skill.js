import Card from 'react-bootstrap/Card';
import {Image} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
export function Skill(props) {
  
  return (
    <>
    <div>
    <Row>
      <Image variant="top"  style={{height:'20vh'}}className=" object-fit-contain img-fluid"src={process.env.NEXT_PUBLIC_SERVER+"/api/images/"+props.skills.imageUrl} />
      </Row>
      <Row >
        <Col className=" d-flex justify-content-center">
        <h4 className="mt-3">{props.skills.skill}</h4>
        </Col>
        </Row>
        </div>
   </>
  );
}

