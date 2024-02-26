import {user} from '@/user'
import {useAtom} from 'jotai';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect,useState } from 'react';

export default function verifyUser(){
const [newUser, setNewUser]=useAtom(user);
const [otpUser,setOtpUser]=useState("");
const verifyOtp=async(e)=>{
    e.preventDefault();
   
    const res=await fetch (process.env.NEXT_PUBLIC_SERVER+'/api/verifyOtp/'+newUser.userName+"/"+otpUser,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        
    });
    const data=await res.json();
    if(res.status==200){
      try{
    const resRegister=await fetch (process.env.NEXT_PUBLIC_SERVER+'/api/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const dataRegister=await resRegister.json();
    console.log(dataRegister);
  }catch(err){
    alert('Wrong Otp');
    console.log(err);
  }
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
    <input type="text" value={otpUser}id="otp" onChange={(e)=>setOtpUser(e.target.value)} className=" my-3"></input></Col> 
    <Col xs={12} className="d-flex justify-content-center">
      <button onClick={verifyOtp} className="dark">Verify Otp</button>
    </Col>
  
  </>
 )


};