import { useRouter } from 'next/router';
import { getProject } from '@/lib/project';
import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {Row,Col} from 'react-bootstrap';
import { updateProject } from '@/lib/project';
import { uploadImage } from '@/lib/project';
export default function EditProject(props) {
  const router = useRouter();
  const {id}=router.query;
 
  const [project, setProject] = useState(null);
  useEffect(()=>{

    const data=async()=>{
      const projectData=await getProject(id);
      setProject(projectData);
    }
     data();
  },[])
   async function submitForm(data){
    let projectData={
      _id:project._id,
      title:data.title,
      description:data.description,
      link:data.link,
      imageUrl:project.imageUrl
    }
    if(data.image.length>0)
    {

      const imageUrl= await uploadImage(data.image[0]);
      if(imageUrl){
        projectData.imageUrl=imageUrl;
        const updatedProject= await updateProject(projectData);
        if(updatedProject){
          alert('Project updated successfully');
        }
        else{
          alert("There was an error in uploding image project");
        }
      }
      else{
        alert("There was an error in uploding image project");
      }

    
    }
    else{
    if(projectData.title!=project.title ||projectData.description!=project.description ||projectData.link!=project.link){
     const updatedProject= await updateProject(projectData);
      if(updatedProject===true){
        alert('Project updated successfully');
      }
      else{
        alert("There was an error in uploding image project");
      }
    }
    }
    
  }
  const {register,handleSubmit}=useForm(
  );

  return <>
  {project!=null?(<>
    <h1 className="mb-5">Edit project</h1>
    <form onSubmit={handleSubmit(submitForm)} >
       <Row>
         <Col xs={2} className="my-2">
         <label htmlFor="title" >Title</label>
         </Col>
         <Col xs={2}>
        <input type="text" id="title" {...register('title')} defaultValue={project.title} />
         </Col>
   
       </Row>
       <Row className="my-2">
         <Col xs={2}>
         <label htmlFor="description" >Description</label>
         </Col>
         <Col xs={2}>
        <textarea id="description" {...register('description')} defaultValue={project.description} />
         </Col>
         
       </Row>
       <Row className="my-2">
         <Col xs={2}>
         <label htmlFor="link" >Link</label>
         </Col>
         <Col xs={2}>
        <input type="text" id="link" {...register('link')} defaultValue={project.link} />
         </Col>
         
       </Row>
       <Row className="my-2">
         <Col xs={2}>
         <label htmlFor="image" >Image</label>
         </Col>
         <Col xs={2}>
        <input type="file" id="image" {...register('image')}  />
        <Row className="my-3">
           <Col xs={2}>
           <button type="submit" className="btn btn-dark">Submit</button>
           </Col>
        </Row>
         </Col>
         
       </Row>
   
    </form>
  </>):<p>Loading...</p>}
  </>
  }