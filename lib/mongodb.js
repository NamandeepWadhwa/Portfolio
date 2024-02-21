export async function getAll(){
    const res=await fetch (process.env.NEXT_PUBLIC_SERVER+'/api/Projects');
    return res;
}

export async function addProject(project){
    const res=await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/Projects',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    });
    return res;
}
export async function deleteProject(id){
  const res = await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/Projects/'+id,{
    method: 'DELETE',
  });
  return res;
}
export async function updateProject(id,project){
    const res= await fetch (porcess.env.NEXT_PUBLIC_SERVER+'/api/Projects/'+id,{
        method: 'PUT',
        body:JSON.stringify(project),
        headers:{
            'Content-Type': 'application/json'
        }
        
    })
    return res;
}
