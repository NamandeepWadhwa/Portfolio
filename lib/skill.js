import { getToken } from "./user";


export async function addSkill(skillData){
   

      const res=await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/skills/',{
        method: 'POST',
        headers: {
          Authorization:`JWT ${getToken()}`,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(skillData)
    });
    
    const data=await res.json();
    if(res.status==200){
      return data.skill;
    }
    else{
      alert("Error in adding skill");
     false;
    } 
}
export async function updateSkill(updatedSkill){

  const res=await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/skills/'+updatedSkill._id,{
    
    method: 'POST',
    headers: {
      Authorization:`JWT ${getToken()}`,
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedSkill)
});
const data=await res.json();
if(res.status==200){
  return true;
}
else{
  alert("Error in updating project");
  return false;
}
}
export async function getAllSkills(){
  const res=await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/skills',{
    method: 'GET',
});
const data=await res.json();
if(res.status==200){
  return data;}
  else{
    alert("Error in fetching projects");
    return [];
  }
}
export async function getSkill(id){
  const res=await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/skills/'+id,{
    method: 'GET',
    headers: {
      Authorization:`JWT ${getToken()}`,

      'Content-Type': 'application/json'
    },
});
const data=await res.json();

if(res.status==200){
  return data;}
  else{
    alert("Error in fetching project");
    return {};
  }
}
export async function deleteSkill(id){
  
  const res=await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/skills/'+id,{
    method: 'DELETE',
    headers: {
      Authorization:`JWT ${getToken()}`,
      'Content-Type': 'application/json'
    },
    }
    );
 
  if(res.status==200){
    return true;}
    else{
      alert("Error in deleting project");
      return false;
    }
  
  }