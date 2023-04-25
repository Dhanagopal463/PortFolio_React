import React from 'react'
import '../../Pages/Style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import olximage from '../../Assets/olx-clone image.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="Dashboard Panel"
                description="                          "
                
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Reliance"
                description="  "
                
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="TCS"
                description=""
                
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="SAIL"
                description=""
                
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="GAIL"
                description=""
                
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="Ashok"
                description=" "
                
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist