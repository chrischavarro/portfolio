import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Headshot from '../images/headshot.jpg';

class About extends Component {
  render() {
    return (
      <div className="row" id="flex">
            <div className="aboutHeader" id="a">
              <span className="aboutHeaderHover">{"Who Am I?"}</span>
              <ul className="right navLinks about" style={{ fontSize: '24pt', textTransform: 'lowercase' }}>
                <Link to="/" style={{ color: 'white' }}><li className="navLink home">Home</li></Link>
                <Link to="/about" style={{ color: '#d500ff' }}><li className="navLink about">About</li></Link>
                <Link to="/skills" style={{ color: 'white' }}><li className="navLink skills">Skills</li></Link>
                <Link to="/projects" style={{ color: 'white' }}><li className="navLink projects">Projects</li></Link>
                <Link to="/contact" style={{ color: 'white' }}><li className="navLink contact">Contact</li></Link>
              </ul>
            </div>
            <div className="row"  >
              <div className="col s8 aboutText" id="b">
                {"I'm a Miami native turned Austinite and Growth Marketer turned Full-Stack Web Developer."}<br/><br/>
                {"I have two years of startup experience, so I know how to get my hands dirty and obsess over the"} <span className="littleText">little details.</span><br/><br/>
                {"I'm passionate about combining robust functionality with an elegant and engaging user experience."}<br/><br/>
                {"In my down time, I love powerlifting, performing stand-up comedy, and hunting down the best burritos in town."}
              </div>
              <div className="col s4 headshot" id="c">
                <img src={Headshot} className="circle photo z-depth-5"/>
              </div>
            </div>
      </div>
    )
  }
}

export default About
