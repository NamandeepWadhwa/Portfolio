import {atom} from 'jotai';
import {getAll} from '@/lib/mongodb.js'

export const projects=atom((async ()=>{

    const res=await getAll();
    const data=await res.json();
    return data;
})());
