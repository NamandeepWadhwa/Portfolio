import { isAuthenticated } from "@/lib/user"
import {useState,useEffect} from 'react';
import {useRouter} from 'next/router';
const PUBLIC_PATHS=['/','/admin','/_error']
export default function RouteGuard(props){
  const [authorized,setAuthorized]=useState(false);
  const router=useRouter();
  useEffect(()=>{
    authCheck(router.pathname);
    router.events.on('routeChangeComplete',authCheck);
    return ()=>{
        router.events.off('routeChangeComplete',authCheck);
    };
  },[]);


    function authCheck(url){
      const path=url.split('?')[0];
      if(!isAuthenticated()&&!PUBLIC_PATHS.includes(path)){
        setAuthorized(false);
        router.push('/admin/');
      }
      else{
      setAuthorized(true);
      }
    }

    return<>

    { authorized && props.children}
    </>
}