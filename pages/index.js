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
          <Image
            src="/Logo.jpeg"
            alt="Namandeep Singh"
            width="50%"
            height="50%"
            className=" rounded mx-auto d-block border border-0
          object-fit-contain border rounded"
          />
          <br />
          <Row>
            <Col md={12}>
              <a
                href="/NamandeepSingh_Developer.pdf"
                download="NamandeepSingh"
                className="text-decoration-none"
              >
                <Button
                  variant="dark"
                  size="lg"
                  className="rounded mx-auto d-block"
                >
                  Resume
                </Button>
              </a>
            </Col>
          </Row>
        </Col>
        <Col md={8} className=" my-5">
          <h1>About me</h1>
          <h4>
            <p>
              I am Namandeep Singh Wadhwa, currently enrolled in the Advanced
              Diploma program for Computer Programming and Analysis at Seneca
              College. Passionate about web development, I specialize in the
              MERN stack and Next.js, and have strong skills in JavaScript
              (ES6), C++, SQL, and MongoDB.
              <br />
              I am proficient with development tools like Visual Studio and
              GitHub, and have a solid foundation in data structures and
              object-oriented programming. My expertise also includes AWS,
              containerization, CI/CD, and automated testing.
              <br />
              <br />
              To learn more about my experience, download my resume by clicking
              the Resume button.
            </p>
          </h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {projectList.length > 0
          ? projectList.map((project, index) => {
              return (
                <Col md={3} key={index} className="my-3 d-flex">
                  <Project
                    project={project}
                    className="d-flex flex-column h-100"
                  />
                </Col>
              );
            })
          : null}
      </Row>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
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
              <Row>
                {skillList[category].map((skill) => (
                  <Col
                    md={3}
                    key={skill._id}
                    className="my-3 d-flex justify-content-center
          "
                  >
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