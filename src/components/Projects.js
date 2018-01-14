import React, { Component } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom'
import { Carousel, Modal } from 'react-materialize'

class Projects extends Component {
  render() {
    return (
      <div className="">
            <div className="aboutHeader">
              <span className="projectsHeader">{"Projects"}</span>
              <ul className="right navLinksTest" style={{ fontSize: '24pt', textTransform: 'lowercase' }}>
                <Link to="/" style={{ color: 'white' }}><li className="navLink education">Home</li></Link>
                <Link to="/about" style={{ color: 'white' }}><li className="navLink about">About</li></Link>
                <Link to="/skills" style={{ color: 'white' }}><li className="navLink skills">Skills</li></Link>
                <Link to="/contact" style={{ color: 'white' }}><li className="navLink contact">Contact</li></Link>
              </ul>
            </div>
            <div className="row" style={{ marginBottom: '0px' }}>
              <div className="col s6 projectsText">
                <div className="projectsTitle">small victory</div>
                  <Carousel options={{ fullWidth: true }} images={[
                    'https://lorempixel.com/800/400/food/1',
                    'https://lorempixel.com/800/400/food/2',
                    'https://lorempixel.com/800/400/food/3',
                    'https://lorempixel.com/800/400/food/4',
                    'https://lorempixel.com/800/400/food/5'
                  ]} />
                  <div style={{ fontWeight: 600 }}>{"Do one 5 minute task that makes you better"}</div>
                  <div>{"Web app that presents users with a daily five-minute task to help improve themselves according to their selected track, which is suggested based on their interests."}</div>
                  <Modal
                    header='Technologies Used'
                    className="dashboardSummary"
                    style={{ backgroundColor: 'rgb(60, 120, 216)', color: 'white', textAlign: 'center'}}
                    trigger={<div className="col s6 projectModalTrigger">Technologies</div>}>
                    <div className="col s6 offset-s3">
                      {"Node, Express, MongoDB, React, HTML, CSS, Javascript"}
                    </div>
                  </Modal>
                  <Modal
                    header='Awards Won'
                    className="dashboardSummary"
                    style={{ backgroundColor: 'rgb(60, 120, 216)', color: 'white', textAlign: 'center'}}
                    trigger={<div className="col s6 projectModalTrigger">Awards</div>}>
                    <div className="col s6 offset-s3">
                      {"Most Innovative Idea, Best User Experience, 1st Place"}
                    </div>
                  </Modal>
              </div>
              <div className="col s6 projectsText">
                <div className="projectsTitle">freecodecamp projects</div>

              </div>
            </div>
      </div>
    )
  }
}

export default Projects;
