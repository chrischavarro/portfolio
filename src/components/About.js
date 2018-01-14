import React, { Component } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom'

// <Header/>
class About extends Component {
  render() {
    return (
      <div className="row">
            <div className="aboutHeader">
              {"Who Am I?"}
              <ul className="right navLinksTest" style={{ fontSize: '24pt', textTransform: 'lowercase' }}>
                <Link to="/" style={{ color: 'white' }}><li className="navLink home">Home</li></Link>
                <Link to="/education" style={{ color: 'white' }}><li className="navLink education">Education</li></Link>
                <Link to="/skills" style={{ color: 'white' }}><li className="navLink skills">Skills</li></Link>
                <Link to="/projects" style={{ color: 'white' }}><li className="navLink projects">Projects</li></Link>
                <Link to="/contact" style={{ color: 'white' }}><li className="navLink contact">Contact</li></Link>
              </ul>
            </div>
            <div className="row">
              <div className="col s8 aboutText">
              {"I'm a Miami native turned Austinite and Growth Marketer turned Full-Stack Web Developer."}<br/><br/>
              {"I have two years of startup experience, so I know how to get my hands dirty and obsess over the"} <span className="littleText">little details.</span><br/><br/>
              {"I'm passionate about combining robust functionality with an elegant and engaging user experience."}<br/><br/>
              {"In my down time, I love powerlifting, performing stand-up comedy, and hunting down the best burritos in town."}
              </div>
              <div className="col s4 headshot">
                <img src="https://image.ibb.co/fOc3X6/Headshot.jpg" className="circle z-depth-5"/>
              </div>
            </div>
      </div>
    )
  }
}

// {"I'm a Miami native turned Austinite looking to transition into a web development role after working in marketing for a tech start-up for the past two years."}<br/><br/>
export default About
