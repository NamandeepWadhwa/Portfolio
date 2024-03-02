import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {user} from '@/user'
import {useAtom} from 'jotai';
import { useRouter } from 'next/router';
import {sendEmail} from '@/lib/email';
import {checkUser} from '@/lib/user';
import {getOtp} from '@/lib/otp';



export default function AdminRegister(){
  const Router = useRouter();
  const[newUser, setNewUser]=useAtom(user);
  async function adminRegister(e){

    e.preventDefault();
    if(newUser.userName=='' || newUser.password==''){
      alert('Please fill all the fields');
      
    }
    else{
      const existingUser=await checkUser(newUser);
      
      if(existingUser){
        alert('User already exists');
       
      Router.push('/admin/');
      }
      else{
      const data= await getOtp(newUser);
      if(data){
        let message="Your OTP is "+data.otp;
        const mailSend=await sendEmail(newUser.userName,message);
        if(mailSend){
          Router.push('/admin/otpVerification');
        }
        else{
          alert('Error in sending otp to mail');
        }
      }
      else{
        alert('Error in getting otp');
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
          <h5>Register new Admin</h5>
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