import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import  {deleteProject}  from '@/lib/project';

export function AdminProject(props) {
  async function remove() {
      const result = await deleteProject(props.project._id);
      if (result === true) {
        alert("Project deleted successfully,reload the page to see the changes");
      }
      else {
        alert("There was an error in deleting project");
      }
  }
  return (
    <tr>
      <td>{props.project.title}</td>
      <td>{props.project.description}</td> 
      <td>{props.project.link}</td>
     
      <td><Image className="img-thumbnail"  style={{ maxWidth: "100px", maxHeight: "100px" }}src={process.env.NEXT_PUBLIC_SERVER + "/api/images/" + props.project.imageUrl} /></td>
      <td><Link href={"/projects/"+props.project._id} className="text-decoration-none text-dark" >Edit</Link></td> 
      <td><a href="#" className="text-decoration-none text-dark" onClick={remove}>Delet</a></td>
      
    </tr>
  );
}
