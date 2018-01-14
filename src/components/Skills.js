import React, { Component } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom'

class Skills extends Component {
  render() {
    return (
      <div className="row">
            <div className="aboutHeader">
              <span className="skillsHeader">{"Skills"}</span>
              <ul className="right navLinksTest" style={{ fontSize: '24pt', textTransform: 'lowercase' }}>
                <Link to="/" style={{ color: 'white' }}><li className="navLink home">Home</li></Link>
                <Link to="/about" style={{ color: 'white' }}><li className="navLink about">About</li></Link>
                <Link to="/projects" style={{ color: 'white' }}><li className="navLink projects">Projects</li></Link>
                <Link to="/contact" style={{ color: 'white' }}><li className="navLink contact">Contact</li></Link>
              </ul>
            </div>
            <div className="row">
              <div className="col s6 skillsText frontend">
                <div className="frontEndTitle">Front-End</div>
                  <div className="skillDiv">{"React"}</div>
                  <div className="skillDiv">{"Javascript"}</div>
                  <div className="skillDiv">{"HTML"}</div>
                  <div className="skillDiv">{"CSS"}</div>
              </div>
              <div className="col s6 skillsText backend">
                <div className="backEndTitle">Back-End</div>
                  <div className="skillDiv">{"Node"}</div>
                  <div className="skillDiv">{"Express"}</div>
                  <div className="skillDiv">{"MongoDB"}</div>
                  <div className="skillDiv">{"Heroku"}</div>
              </div>
            </div>
      </div>
    )
  }
}
// node, javscript, express, mongodb, reactjs, heroku, html, css
export default Skills
