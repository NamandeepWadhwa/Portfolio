import { useRouter } from 'next/router';
import { getSkill} from '@/lib/skill';
import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {Row,Col} from 'react-bootstrap';
import { updateSkill} from '@/lib/skill';
import { uploadImage } from '@/lib/image';
export default function EditSkill(props) {
  const router = useRouter();
  const {id}=router.query;
 
  const [skill, setSkill] = useState(null);
  useEffect(()=>{

    const data=async()=>{
      const singleSkill=await getSkill(id);
      setSkill(singleSkill);
    }
     data();
  },[]);

   async function submitForm(data){

    let skillData={
      _id:skill._id,
      skill:data.skill,
      imageUrl:skill.imageUrl
    }
   
    if(data.image.length>0)
    {

      const imageUrl= await uploadImage(data.image[0]);
      if(imageUrl){
        skillData.imageUrl=imageUrl;
        const updatedSkillData= await updateSkill(skillData);
        if(updatedSkillData){
          alert('Skill updated successfully');
        }
        else{
          alert("There was an error in updating skill");
        }
      }
      else{
        alert("There was an error in uploding skill image");
      }

    
    }
    else{
    if(skillData.skill!=skill.skill){
     
     const updatedSkill= await updateSkill(skillData);
      if(updatedSkill===true){
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
  {skill!=null?(<>
    <h1 className="mb-5">Edit project</h1>
    <form onSubmit={handleSubmit(submitForm)} >
       <Row>
         <Col xs={2} className="my-2">
         <label htmlFor="skill" >Skill</label>
         </Col>
         <Col xs={2}>
        <input type="text" id="skill" {...register('skill')} defaultValue={skill.skill} />
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