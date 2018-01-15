import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Modal } from 'react-materialize'
import Pic1 from '../images/small-victory-1.jpg'
import Pic2 from '../images/small-victory-2.jpg'
import Pic3 from '../images/small-victory-3.jpg'

class Projects extends Component {
  render() {
    return (
      <div className="">
            <div className="aboutHeader">
              <span className="projectsHeader">{"Projects"}</span>
              <ul className="right navLinks projects" style={{ fontSize: '24pt', textTransform: 'lowercase' }}>
                <Link to="/" style={{ color: 'white' }}><li className="navLink home">Home</li></Link>
                <Link to="/about" style={{ color: 'white' }}><li className="navLink about">About</li></Link>
                <Link to="/skills" style={{ color: 'white' }}><li className="navLink skills">Skills</li></Link>
                <Link to="/contact" style={{ color: 'white' }}><li className="navLink contact">Contact</li></Link>
              </ul>
            </div>
            <div className="row" style={{ marginBottom: '0px' }}>
              <div className="col s6 projectsText">
                <div className="projectsTitle">small victory</div>
                  <Carousel options={{ fullWidth: true }} images={[
                    `${Pic1}`,
                    `${Pic2}`,
                    `${Pic3}`
                  ]} />
                  <div style={{ fontWeight: 600 }}>{"Do one 5 minute task that makes you better"}</div>
                  <div style={{ marginBottom: '5px' }}>{"Web app that presents users with a daily five-minute task to help improve themselves according to their selected track, which is suggested based on their interests."}</div>
                  <Modal
                    header='Technologies Used'
                    className="projectModal"
                    style={{ backgroundColor: '#1a191e', color: 'white', textAlign: 'center', width: '25%'}}
                    trigger={<div className="col s6 projectModalTrigger">Technologies</div>}>
                    <div className="projectModalText technologies">
                      <ul>
                        <li>{"Node"}</li>
                        <li>{"Express"}</li>
                        <li>{"MongoDB"}</li>
                        <li>{"React"}</li>
                        <li>{"Redux"}</li>
                      </ul>
                    </div>
                  </Modal>
                  <Modal
                    header='Ironhack Hack Show Awards'
                    className="projectModal"
                    style={{ backgroundColor: '#1a191e', color: 'white', textAlign: 'center', width: '25%'}}
                    trigger={<div className="col s6 projectModalTrigger">Awards</div>}>
                    <div className="projectModalText awards">
                      <ul>
                        <li>{"Most Innovative Idea"}</li>
                        <li>{"Best User Experience"}</li>
                        <li>{"1st Place Overall"}</li>
                      </ul>
                    </div>
                  </Modal>
              </div>
              <div className="col s6 projectsText">
                <div className="projectsTitle freecodecampTitle">freecodecamp</div>
                  <ul className="freecodecamp">
                    <li>
                      Pollr <br/>
                      <span className="fccTechnology">{"React, Redux, Node, Express, MongoDB"}</span>
                    </li>
                    <li>
                      Camper Leaderboard <br/>
                      <span className="fccTechnology">{"React, Redux"}</span>
                    </li>
                    <li>
                      Recipe Box <br/>
                      <span className="fccTechnology">{"React, Redux"}</span>
                    </li>
                    <li>
                    Markdown Previewer <br/>
                    <span className="fccTechnology">{"React"}</span>
                    </li>
                  </ul>
              </div>
            </div>
      </div>
    )
  }
}

export default Projects;
