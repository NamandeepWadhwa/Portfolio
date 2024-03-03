import {atom} from 'jotai';
import {getAllProjects} from '@/lib/project'

export const projects=atom((async ()=>{
  let data=[]
  
    const projectList=await getAllProjects();
    
  
    if(projectList){
   return projectList;
    }
    else{
      return data;
    }
  

})());
