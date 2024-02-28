export  async function getOtp(newUser){
  const res= await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/getOtp/'+newUser.userName,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
   
  })
  const data=await res.json();
  if(res.status==200){
    return data;
  }
  else{
    return false;
  }

}
export async function verifyOtp(userName,otp){
  const res=await fetch (process.env.NEXT_PUBLIC_SERVER+'/api/verifyOtp/'+userName+"/"+otp,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    
});
const data=await res.json();
if(res.status==200){
  return true;}

  else{
    return false;
  }

}