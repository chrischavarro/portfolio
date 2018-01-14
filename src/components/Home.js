import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <span className="homeName">Christian Chavarro</span> <br/> <br/>
            <span className="homeTitle">Full-Stack Javascript Developer</span>
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
