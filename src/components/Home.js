import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Github from '../images/github.svg';
import Linkedin from '../images/linkedin.svg';
import Gmail from '../images/gmail.png';
import Medium from '../images/medium.png';
import StackOverflow from '../images/stackoverflow.png';
import ParticleBG from './Particles'
// #C1CAD6
// #2B4162 used
// #385F71 similar
// #F5F0F6 not ideal
// #D7B377
// #8F754F
class Header extends Component {
  render() {
    return (
      <div className="row" style={{ padding: '0px', margin: '0', minHeight: '100vh' }}>
        <div className="col s8 valign-wrapper homeDiv" style={{ minHeight: '100vh' }}>
          <div className="titleDiv">
            <div className="homeName"><span>Christian Chavarro</span></div> <br/>
            <div className="homeTitle">Full-Stack Javascript Developer</div>
            <div className="contactButtons">
              <a href="https://github.com/chrischavarro"><img src={Github} style={{ width: '75px' }} className="circle contact"/></a>
              <a href="https://www.linkedin.com/in/christianchavarro/"><img src={Linkedin} style={{ width: '75px', marginLeft: '20px' }} className="circle contact"/></a>
              <a href="mailto:chavarro.christian@gmail.com"><img src={Gmail} style={{ width: '75px', marginLeft: '20px' }} className="circle contact"/></a>
              <a href="https://medium.com/@christianchavarro" className="mobilePush"><img src={Medium} style={{ width: '75px', marginLeft: '20px' }} className="circle contact "/></a>
              <a href="https://stackoverflow.com/users/story/9245647"><img src={StackOverflow} style={{ width: '75px', marginLeft: '20px' }} className="circle contact"/></a>
            </div>
          </div>
        </div>
        <div className="col s4 homeLinks valign-wrapper" style={{ minHeight: '100vh' }}>
            <ul>
              <Link to="/about" style={{ color: 'white' }}><li className="homeLink about" style={{ color: 'white' }}>About Me</li></Link>
              <Link to="/skills" style={{ color: 'white' }}><li className="homeLink skills" style={{ color: 'white' }}>Skills</li></Link>
              <Link to="/projects" style={{ color: 'white' }}><li className="homeLink projects" style={{ color: 'white' }}>Projects</li></Link>
              <Link to="/contact" style={{ color: 'white' }}><li className="homeLink contact" style={{ color: 'white' }}>Contact</li></Link>
            </ul>
        </div>
      </div>
    )
  }
}

export default Header;
