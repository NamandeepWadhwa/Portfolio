import {useForm} from 'react-hook-form';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { addProject } from "@/lib/project";
import { updateProject } from "@/lib/project";
import { uploadImage } from "@/lib/image";


export default function Projects() {
  const {register,handleSubmit}=useForm();

  async function submitForm(data){
    let projectData={
      title:data.title,
      description:data.description,
      link:data.link
    }
 

    const projectAdded=await addProject(projectData);
    if(projectAdded){

      if(data.image.length>0){
      const imageUrl=await uploadImage(data.image[0]);
    
      if(imageUrl){
        projectAdded.imageUrl=imageUrl;
        
        const resulData=await updateProject(projectAdded);
        if(resulData){
          alert('Project added successfully');
        }
        else{
          alert("There was an error in updating  project");
        }
      }
      else{
        alert("There was an error in uploding project image");
      }
    }
    }
  
    else{
      alert("There was an error in adding project");
    }
    if(projectAdded){
      alert('Project added successfully');
    }

  }
 
  
   

  return<>
  <h1 className="mb-5">Add Project</h1>
 <form onSubmit={handleSubmit(submitForm)} >
    <Row>
      <Col xs={2} className="my-2">
      <label htmlFor="title" >Title</label>
      </Col>
      <Col xs={2}>
     <input type="text" id="title" {...register('title')} />
      </Col>

    </Row>
    <Row className="my-2">
      <Col xs={2}>
      <label htmlFor="description" >Description</label>
      </Col>
      <Col xs={2}>
     <textarea id="description" {...register('description')} />
      </Col>
      
    </Row>
    <Row className="my-2">
      <Col xs={2}>
      <label htmlFor="link" >Link</label>
      </Col>
      <Col xs={2}>
     <input type="text" id="link" {...register('link')} />
      </Col>
      
    </Row>
    <Row className="my-2">
      <Col xs={2}>
      <label htmlFor="image" >Image</label>
      </Col>
      <Col xs={2}>
     <input type="file" id="image" {...register('image')} />
     <Row className="my-3">
        <Col xs={2}>
        <button type="submit" className="btn btn-dark">Submit</button>
        </Col>
     </Row>
      </Col>
      
    </Row>

 </form>


  </>
}