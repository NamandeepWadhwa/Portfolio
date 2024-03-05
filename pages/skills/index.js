import { skills } from "@/skills";
import { useAtom } from "jotai";
import AdminSkill from "@/components/AdminSkill";
import { Table } from "react-bootstrap";
import { Row } from "react-bootstrap";
import  Link  from 'next/link';
export default function Home() {
  const [skillList, setSkillList] = useAtom(skills);
  
 

  return<>

  <Row className="mb-4">
    <h3><Link href="/skills/addSkill" className="text-decoration-none text-dark"> Add a new Skill</Link></h3>
  </Row>
  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Skill</th>
      <th>Image</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
 
  <tbody>
 {skillList?Object.keys(skillList).map((category)=>{
   return skillList[category].map((skill,index)=>{
   return <AdminSkill skills={skill} key={skill._id}></AdminSkill>
  })
 })

 :<h1>Loading</h1>}
</tbody>
</Table>
  </>
}