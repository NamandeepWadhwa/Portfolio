import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import  {deleteSkill}  from '@/lib/skill';
export default function AdminSkill(props) {


  async function remove() {
    const result = await deleteSkill(props.skills._id);
    if (result === true) {
      alert("Skill deleted successfully,reload the page to see the changes");
    }
    else {
      alert("Skill was an error in deleting project");
    }
}
return (
  <tr>
    <td>{props.skills.skill}</td> 
    <td><Image className="img-thumbnail"  style={{ maxWidth: "100px", maxHeight: "100px" }}src={process.env.NEXT_PUBLIC_SERVER + "/api/images/" + props.skills.imageUrl} /></td>
    <td><Link href={"/skills/"+props.skills._id} className="text-decoration-none text-dark" >Edit</Link></td> 
    <td><a href="#" className="text-decoration-none text-dark" onClick={remove}>Delete</a></td>
    
  </tr>
);
 }