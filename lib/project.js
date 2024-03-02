import { jwtDecode } from "jwt-decode";
import { getToken } from "./user";
export  async function uploadImage(image){

  let sendData = new FormData();
  sendData.append('image',image);
 
  
  
    const res= await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/upload/image',{
      method: 'POST',
      headers: {
        Authorization:`JWT ${getToken()}`,
      },
      body: sendData
    });
    const data=await res.json();
    if(res.status==200){

      return data.imageUrl;
    }
    else{
      alert("Error in uploading image");
      return false;
    }
  
  }

export async function addProject(projectData){
   

      const res=await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/projects/',{
        method: 'POST',
        headers: {
          Authorization:`JWT ${getToken()}`,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectData)
    });
    
    const data=await res.json();
    if(res.status==200){
      return true;
    }
    else{
      alert("Error in adding project");
     false;
    } 
}
export async function updateProject(updatedProject){
  const res=await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/projects/'+updatedProject.title,{
    method: 'POST',
    headers: {
      Authorization:`JWT ${getToken()}`,
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedProject)
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