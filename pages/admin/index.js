import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {user} from '@/user'
import {useAtom} from 'jotai';;
import { useRouter } from 'next/router';
import {loginUser} from '@/lib/user';

export default function Admin() {
const Router = useRouter();
const [userLogin, setUser]=useAtom(user);
 async  function adminLogin(e){
      e.preventDefault();
   
      if(userLogin.userName=='' || userLogin.password==''){
        alert('Please fill all the fields');
      }
      else{
        const login=await loginUser(userLogin);
        if(login){
         Router.push('/');
        }
        else{
          alert('Invalid username or password');
        }
        
      }
  }
  function routeChange(e){
    e.preventDefault();
    Router.push('/admin/adminRegister');
   
  }

  return (
    <Row className="my-5">
      <Col xs={12} className="d-flex justify-content-center my-3">
        <h3>Admin Login
       </h3>
      
      </Col>
      <Row>
      <Col xs={12} className="d-flex justify-content-center my-2">
        <h3>Please note this page is for admin use only</h3>
       </Col>
       </Row>
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
            
        </form>
        </Col>
    </Row>
    
  );
}