import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
  render() {
    return (
      <div style={{ minHeight: '100vh' }}>
            <div className="aboutHeader">
              <span className="contactHeader">{"Contact"}</span>
              <ul className="right navLinks" style={{ fontSize: '24pt', textTransform: 'lowercase' }}>
                <Link to="/" style={{ color: 'white' }}><li className="navLink home">Home</li></Link>
                <Link to="/about" style={{ color: 'white' }}><li className="navLink about">About</li></Link>
                <Link to="/skills" style={{ color: 'white' }}><li className="navLink skills">Skills</li></Link>
                <Link to="/projects" style={{ color: 'white' }}><li className="navLink projects">Projects</li></Link>
              </ul>
            </div>
            <div className="row" style={{ marginBottom: '0px' }}>
              <div className="col s12 contactText">
                <div className="contactTitle">{"Want to get in touch?"}</div>
                  <div style={{ }}>
                    {"find me on"} <a href="https://www.linkedin.com/in/christianchavarro/" className="contactLink linkedin" style={{ color: 'white' }}>LinkedIn</a> <br/>
                    {"check out my"} <a href="https://github.com/chrischavarro" className="contactLink github" style={{ color: 'white' }}>GitHub</a> <br/>
                    {"grab a copy of my"} <a href="https://www.dropbox.com/s/4h2cadwjdukqq9g/Christian%20Chavarro%20Resume.docx?dl=0" target="_blank" className="contactLink resume" style={{ color: 'white'}}>resume</a> <br/>
                    {"or shoot me an"} <a href="mailto:chavarro.christian@gmail.com" className="contactLink email" style={{ color: 'white'}}>email</a> <br/>
                  </div>
              </div>
            </div>
      </div>
    )
  }
}
// <div className="col s6 projectsText">
// <div className="projectsTitle">freecodecamp</div>
// </div>

// Email, phone number, resume, github, linkedin

export default Contact;
