import {atom} from 'jotai';
import {getAllSkills} from '@/lib/skill'

export const skills=atom((async ()=>{
  let data=[]
  
    const skillsList=await getAllSkills();
     
  
    if(skillsList){
    
   return skillsList;
    }
    else{
      return data;
    }
  

})());
