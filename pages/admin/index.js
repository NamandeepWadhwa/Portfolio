import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {user} from '@/user'
import {useAtom} from 'jotai';;
import { useRouter } from 'next/router';

export default function Admin() {
const Router = useRouter();
const [userLogin, setUser]=useAtom(user);
 async  function adminLogin(e){
      e.preventDefault();
   
      if(userLogin.userName=='' || userLogin.password==''){
        alert('Please fill all the fields');
      }
      else{
        try{
        const res= await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/login',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userLogin)
        });
        const data=res.json();
        if(res.status==200){
         console.log(data);
        }
      }
      catch(err){
        console.log(err);
      }
      }
  }
  function routeChange(e){
    e.preventDefault();
    console.log(Router.push('/admin/adminRegister'));
   
  }

  return (
    <Row className="my-5">
      <Col xs={12} className="d-flex justify-content-center my-4">
        <h3>Admin Login</h3>
      </Col>
      <Col xs={12} className="d-flex justify-content-center my-1">
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" onChange={(e)=>{
              setUser((userLogin)=>({...userLogin,userName:e.target.value}))
            }} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={(e)=>{
              setUser((userLogin)=>({...userLogin,password:e.target.value}))
            }} />
          </div>
          <button type="submit" className="btn btn-dark mx-2"  onClick={adminLogin}
           
            >Login</button>
             <button type="submit" className="btn btn-dark mx-3"
            onClick={routeChange}
           
           >Register</button>
        </form>
        </Col>
    </Row>
    
  );
}