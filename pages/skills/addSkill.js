import {useForm} from 'react-hook-form';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import {addSkill} from "@/lib/skill";
import { updateSkill } from "@/lib/skill";
import { uploadImage } from "@/lib/image";


export default function skills() {
  const {register,handleSubmit}=useForm();

  async function submitForm(data){
    let skillData={
      skill:data.skill,
      category:data.category
    }
 

    const skillAdded=await addSkill(skillData);
    if(skillAdded && data.image.length>0)
    {

      
      const imageUrl=await uploadImage(data.image[0]);
    
      if(imageUrl){
        skillAdded.imageUrl=imageUrl;
        
        const resulData=await updateSkill(skillAdded);
        if(resulData){
          alert('skill added successfully');
        }
        else{
          alert("There was an error in updating skill");
        }
      }
      else{
        alert("There was an error in uploding image skill");
      }
    
    
  }
    if(skillAdded){
      alert('skill added successfully');
    
    }
    else{
      alert("There was an error in adding skill");
    }
  }
 
  
   

  return<>
  <h1 className="mb-5">Add skill</h1>
 <form onSubmit={handleSubmit(submitForm)} >
    <Row>
      <Col xs={2} className="my-2">
      <label htmlFor="skill" >Skill</label>
      </Col>
      <Col xs={2}>
     <input type="text" id="skill" {...register('skill')} />
      </Col>

    </Row>
    
    <Row className="my-2">
      <Col xs={2}>
      <label htmlFor="category" >Category</label>
      </Col>
      <Col xs={2}>
     <input type="text" id="category" {...register('category')} />
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