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
        <div className="white-text col s8 valign-wrapper" style={{ minHeight: '100vh' }}>
          <div className="titleDiv">
            <span className="homeName">Christian Chavarro</span> <br/> <br/>
            <span className="homeTitle">Full-Stack Javascript Developer</span>
          </div>
        </div>
        <div className="col s4 homeLinks valign-wrapper" style={{ minHeight: '100vh' }}>
            <ul>
              <li className="homeLink about"><i className="material-icons">adjust</i><Link to="/about" style={{ color: 'white' }}>About Me</Link></li>
              <li className="homeLink education"><i className="material-icons">adjust</i><a href="#" style={{ color: 'white' }}>Education</a></li>
              <li className="homeLink skills"><i className="material-icons">adjust</i><a href="#" style={{ color: 'white' }}>Skills</a></li>
              <li className="homeLink portfolio"><i className="material-icons">adjust</i><a href="#" style={{ color: 'white' }}>Portfolio</a></li>
              <li className="homeLink contact"><i className="material-icons">adjust</i><a href="#" style={{ color: 'white' }}>Contact</a></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Header;
