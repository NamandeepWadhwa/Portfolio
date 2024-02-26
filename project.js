import {atom} from 'jotai';
import {getAll} from '@/lib/mongodb.js'

export const projects=atom((async ()=>{
  let data=[]
  try{
    const res=await getAll();
    data=await res.json();
    return data;
  }
  catch(err){
    return [];  
    console.log(err);
  }

})());
