import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {user,otp} from '@/user'
import {useAtom} from 'jotai';;
import { useRouter } from 'next/router';
import { set } from 'mongoose';



export default function AdminRegister(){
  const Router = useRouter();
  const[newUser, setNewUser]=useAtom(user);
  const [newOtp, setNewOtp]=useAtom(otp);
  async function adminRegister(e){

    e.preventDefault();
    if(newUser.userName=='' || newUser.password==''){
      alert('Please fill all the fields');
      
    }
    else{
      const user=await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/users/'+newUser.userName,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
      })
      const existingUser=await user.json();
      if(existingUser.length>0){
        alert('User already exists');
       
      Router.push('/admin/');
      }
      else{
    const res= await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/getOtp/'+newUser.userName,{
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
     
    })
    const data=await res.json();
    setNewOtp(data.otp);
    const resEmailOtp= await fetch (process.env.NEXT_PUBLIC_SERVER+'/api/sendEmail',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({from_name:newUser.userName,message:`Otp for registration ${data.otp}`})
    })
    if(resEmailOtp.status==200){
      Router.push('/admin/otpVerification');
    }
    else{
      alert('Error in sending otp');
    }
    
  }
  } 
  }
  function routeChange(e){
    e.preventDefault();

   
    Route.push('/admin/');
   
  }
  return (
      <Row className="my-2">
        <Col xs={12} className="d-flex justify-content-center my-4">
          <h3>Admin Register</h3>
          
        </Col>
        <Col xs={12} className="d-flex justify-content-center mb-4">
        <br/>
          <h5>Please not that you will need OTP for registeration which will be send to my mail.<br/> I was learning how to authenticate using email otp so I added this page.</h5>
          </Col>
        <Col xs={12} className="d-flex justify-content-center my-1">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" onChange={(e)=>{
                setNewUser((newUser)=>({...newUser,userName:e.target.value}))
              }} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" onChange={(e)=>{
                setNewUser((newUser)=>({...newUser,password:e.target.value}))
              }} />
            </div>
            
            <button type="submit" className="btn btn-dark mx-2"  onClick={adminRegister}
           
            >Register</button>
             <button type="submit" className="btn btn-dark mx-3"
            onClick={routeChange}
           
           >Login</button>
          </form>
          </Col>
      </Row>
      
    );
}