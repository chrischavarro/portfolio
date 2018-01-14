import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Github from '../images/github.svg';
import Linkedin from '../images/linkedin.svg';
import Gmail from '../images/gmail.png';
// #C1CAD6
// #2B4162 used
// #385F71 similar
// #F5F0F6 not ideal
// #D7B377
// #8F754F
class Header extends Component {
  render() {
    return (
      <div className="row" style={{ padding: '0px', margin: '0', minHeight: '100vh', zIndex:1 }}>
        <div className="col s8 valign-wrapper" style={{ minHeight: '100vh' }}>
          <div className="titleDiv">
            <div className="homeName">Christian Chavarro</div> <br/> 
            <div className="homeTitle">Full-Stack Javascript Developer</div>
            <div className="contactButtons">
              <a href="https://github.com/chrischavarro"><img src={Github} style={{ width: '75px' }} className="circle contact"/></a>
              <a href="https://www.linkedin.com/in/christianchavarro/"><img src={Linkedin} style={{ width: '75px', marginLeft: '20px' }} className=" circle contact"/></a>
              <a href="mailto:chavarro.christian@gmail.com"><img src={Gmail} style={{ width: '75px', marginLeft: '20px' }} className=" circle contact"/></a>
            </div>
          </div>
        </div>
        <div className="col s4 homeLinks valign-wrapper" style={{ minHeight: '100vh' }}>
            <ul>
              <Link to="/about" style={{ color: 'white' }}><li className="homeLink about" style={{ color: 'white' }}><i className="material-icons">adjust</i>About Me</li></Link>
              <Link to="/skills" style={{ color: 'white' }}><li className="homeLink skills" style={{ color: 'white' }}><i className="material-icons">adjust</i>Skills</li></Link>
              <Link to="/projects" style={{ color: 'white' }}><li className="homeLink projects" style={{ color: 'white' }}><i className="material-icons">adjust</i>Projects</li></Link>
              <Link to="/contact" style={{ color: 'white' }}><li className="homeLink contact" style={{ color: 'white' }}><i className="material-icons">adjust</i>Contact</li></Link>
            </ul>
        </div>
      </div>
    )
  }
}

export default Header;
