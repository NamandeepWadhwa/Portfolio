export  async function sendEmail(userName,message)
{
  const res= await fetch (process.env.NEXT_PUBLIC_SERVER+'/api/sendEmail',{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({from_name:userName,message:message})});
    const data=await res.json();
    if(res.status==200){
      return true;
    }
    else{
      return false;
    }

  }