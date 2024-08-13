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
              Hello, I&apos;am Namandeep Singh Wadhwa, a Computer Programming
              and Analysis graduate from Seneca College. I specialize in
              full-stack development with expertise in creating and deploying
              web applications using Node.js, Express, React, and Next.js.
              Skilled in implementing secure authentication, integrating
              databases like MongoDB and PostgreSQL, and utilizing AWS for cloud
              solutions. I am dedicated to delivering innovative, high-quality
              software solutions and thriving in dynamic development
              environments.
              <br />
              <br /> To learn more about my experience, download my resume by
              clicking the Resume button.
            </p>
          </h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row className="justify-content-center " style={{overflow:"auto"}}>
        {projectList.length > 0
          ? projectList.map((project, index) => {
              return (
                <Col key={index} className="my-3 d-flex">
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
              <Row className="justify-content-center">
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