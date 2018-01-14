import React, { Component } from 'react';
import {Modal} from 'react-materialize'

class Header extends Component {
  render() {
    // Replace full name on header with CC, possibly once visitor starts scrolling
    // Only show when visitor starts scrolling
    // z-depth-4
    return (
      <nav style={{}}>
        <div className="nav-wrapper headerDiv">
            <span className="brand-logo">Christian Chavarro</span>
              <ul className="right navLinks settingsLink">
                <li><a href="#">About Me</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
        </div>
      </nav>
    )
  }
}
// <li>
// <Modal
// header='Profile Settings'
// className="dashboardSummary"
// style={{ backgroundColor: 'rgb(60, 120, 216)', color: 'white', textAlign: 'center', maxHeight: '90%'}}
// trigger={<a className="">Settings</a>}>
// <div className="col s6 offset-s3">
// <a href="/api/logout"><button className="startTask" style={{ width: '100%'}}>Log Out</button></a><br/>
// <a href="/api/profile/reset"><button className="startTask" style={{ width: '100%'}}>Reset Profile</button></a>
// <a href="mailto:chavarro.christian@gmail.com"><button className="startTask" style={{ width: '100%'}}>Contact</button></a><br/>
// </div>
// </Modal>
// </li>

export default Header;
