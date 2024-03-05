import {user} from '@/user'
import {useAtom} from 'jotai';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState } from 'react';
import {verifyOtp} from '@/lib/otp';
import {registerUser} from '@/lib/user';  
import { useRouter } from 'next/router';

export default function VerifyUser(){
  const Router = useRouter();
const [newUser, setNewUser]=useAtom(user);
const [otpUser,setOtpUser]=useState("");
const otpVerificatoin=async(e)=>{
    e.preventDefault();
   
   const otpVerified=await verifyOtp(newUser.userName,otpUser);
    
    if(otpVerified)
    {
     
        const userRegistered=await registerUser(newUser);
        if(userRegistered){
          alert('User Registered');
          Router.push('/admin/');
        }
        else{
          alert('Error in registering user');
        }
  }
  else{
    alert('Wrong Otp');
    
    }
}
 return(
  <>
  <Row>
    <Col xs={12} className="d-flex justify-content-center">
    <h1><label id="otp">Enter OTP</label></h1>
    </Col>
    </Row> 
    <Col xs={12} className="d-flex justify-content-center">
    <input type="text" value={otpUser}id="otp" onChange={(e)=>setOtpUser(e.target.value)} className="rounded my-3"></input></Col> 
    <Col xs={12} className="d-flex justify-content-center">
      <button onClick={otpVerificatoin} className="btn btn-dark">Verify Otp</button>
    </Col>
  
  </>
 )


};