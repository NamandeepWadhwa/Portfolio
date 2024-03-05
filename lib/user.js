import {jwtDecode} from 'jwt-decode';



export  async  function  loginUser(userLogin)
{
  try{
  const res= await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/login',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userLogin)
  });
  const data=await res.json();
  if(res.status==200){
    
   setToken(data.userToken);
 

   return true;
  }
  else{
    return false;
  }
}
  catch(err){
    console.log(err);
    return false;
  }
}
export  async function registerUser(newUser){
  const res=await fetch (process.env.NEXT_PUBLIC_SERVER+'/api/register',{
    method: 'POST',
    headers: {
      Authorization:`JWT ${getToken()}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
});
const data=await res.json();
if(res.status==200){
  return true;}
  else{
    return false;
  } 

}
export async function checkUser(newUser){
  const res=await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/users/'+newUser.userName,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
  })
  const data=await res.json();
  if(data.length>0){
    return true;
  }
  else{
    return false;
  }
}
function setToken(token){
  
  localStorage.setItem('token',token);

}
export function getToken(){
  try {
    
    return (localStorage.getItem('token'));
  } catch (err) {
    
    return null;
  }
}
export function removeToken(){
  localStorage.removeItem('token');
}
export function readToken(){
  try {
  

    const token=getToken();
    return token ? jwtDecode(token) : null;
  } catch (err) {
   console.log(err);
    return "";
  }
}
export function isAuthenticated(){
const token=readToken();
return token?true:false;

}