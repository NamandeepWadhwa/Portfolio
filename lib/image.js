import {getToken} from './user';
export  async function uploadImage(image){

  let sendData = new FormData();
  sendData.append('image',image);
 
  
  
    const res= await fetch(process.env.NEXT_PUBLIC_SERVER+'/api/upload/image',{
      method: 'POST',
      headers: {
        Authorization:`JWT ${getToken()}`,
      },
      body: sendData
    });
    const data=await res.json();
    if(res.status==200){

      return data.imageUrl;
    }
    else{
      alert("Error in uploading image");
      return false;
    }
  
  }
