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
              <li className="homeLink about"><i className="material-icons">adjust</i><Link to="/about" style={{ color: 'white' }}>About Me</Link></li>
              <li className="homeLink education"><i className="material-icons">adjust</i><Link to="/education" style={{ color: 'white' }}>Education</Link></li>
              <li className="homeLink skills"><i className="material-icons">adjust</i><Link to="/skills" style={{ color: 'white' }}>Skills</Link></li>
              <li className="homeLink projects"><i className="material-icons">adjust</i><Link to="/projects" style={{ color: 'white' }}>Projects</Link></li>
              <li className="homeLink contact"><i className="material-icons">adjust</i><Link to="/contact" style={{ color: 'white' }}>Contact</Link></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Header;
