import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Project} from '@/components/Project';
import { skills } from '@/skills';
import {projects} from '@/project';
import { useAtom } from 'jotai';
import {Skill} from '@/components/Skill'



export default function Home(props) {
const [projectList,setProjectList]=useAtom(projects);
const [skillList,setSkillList]=useAtom(skills);

  return (
    <>
   
      <Row>
        <Col md={4} className="justify-content-center my-5">
          
          <Image src="/Logo.jpeg" alt="Namandeep Singh" width="50%" height="50%" className=" rounded mx-auto d-block border border-0
          object-fit-contain border rounded" /><br />
          <Row>

        
          <Col md={12}>
          <a href="/Namandeep-Singh-Web-dev-Resume.pdf" download="Namandeep Singh" className="text-decoration-none">
          <Button variant="dark" size="lg" className="rounded mx-auto d-block">
      Resume
      </Button>
      </a>
            </Col>
            </Row>
       
        </Col>
        <Col md={8} className=" my-5">
          <h1>About me</h1>
          <h4><p>
          I am Namandeep Singh Wadhwa, currently enrolled in the Advanced Diploma program for Computer Programming and Analysis at Seneca College. My academic journey has fueled a strong passion for web development, and I am dedicated to continuously refining my skills in this domain. Proficient in the MERN stack and Next.js, I also have extensive experience in JavaScript (ES6), C++, SQL, and MongoDB.<br/><br/>Additionally, I am well-versed in essential development tools such as Visual Studio, GitHub, and software fundamentals like data structures and object-oriented programming. My goal is to leverage these skills to contribute effectively to the field of web development.
            </p>
            </h4>
        
        </Col>
      </Row>
      <Row > 
      <Col xs={12}className="d-flex justify-content-center">
      <h1>Projects</h1>
        </Col>
      </Row>
      <Row>
       {
        
        projectList.length> 0 ? projectList.map((project, index) => {
         return(
            <Col md={3} key={index} className="my-3">
              <Project project={project} />
            </Col>
         );
          
        }): (null)  
      
      }
        
      </Row>
   <Row>
   <Col xs={12}className="d-flex justify-content-center">
      <h1>Skills</h1>
        </Col>
   </Row>
   {skillList ? (
  <>
    {Object.keys(skillList).map((category, index) => (
      <div key={index}>
        <Row className="mt-5 mb-2">
          <Col xs={12} className="my-4 d-flex justify-content-center">
            <h3>{category}</h3>
          </Col>
        </Row>
        <Row >
          {skillList[category].map((skill) => (
            <Col md={3} key={skill._id} className="my-3 d-flex justify-content-center
          ">
              <Skill skills={skill}></Skill>
            </Col>
          ))}
        </Row>
      </div>
    ))}
  </>
) : (
  <h1>Skills loading</h1>
)}

   
   </>

  );
}