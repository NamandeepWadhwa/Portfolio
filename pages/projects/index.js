import { projects } from "@/project";
import { useAtom } from "jotai";
import { Table } from "react-bootstrap";
import { Row } from "react-bootstrap";
import  Link  from 'next/link';
import  { AdminProject} from "@/components/AdminProject";
export default function Home(props) {
const [projectList,setProjectList]=useAtom(projects);
return (
  <>
  <Row className="mb-4">
    <h3><Link href="/projects/addProject" className="text-decoration-none text-dark"> Add a new project</Link></h3>
  </Row>
  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Link</th>
      <th>Image</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
 
  <tbody>
  {projectList.length> 0 ? projectList.map((project, index) => {

return(
   < AdminProject project={project} key={project._id}/>
);
}): (null)}
  </tbody>
</Table>
</>
);

}