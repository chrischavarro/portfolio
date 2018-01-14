import React, { Component } from 'react'
import Header from './Header';

// <Header/>
class About extends Component {
  render() {
    return (
      <div className="row" style={{ padding: '0px', margin: '0', minHeight: '100vh' }}>
          <div className="col s12">
            <span className="aboutHeader">
              {"Who Am I?"}
            </span>
            <div className="row">
            <div className="col s4 offset-s4 headshot">
              <img src="https://image.ibb.co/fOc3X6/Headshot.jpg"
                className="circle"
                  width="85%"
              />
            </div>
            </div>

            <span className="aboutText">
              {"I'm a Miami native looking to transition into a web development role after working in marketing for a tech start-up for the past two years."}

            </span>
            <span
              className=""
              style={{ textAlign: 'left', fontFamily: 'Lato', fontSize: '32pt', paddingTop: '5%', fontWeight: '100', lineHeight: '50px', marginRight: '17%', marginLeft: '17%' }}
            >
              {"In my down time, I love powerlifting and occasionally perform stand-up comedy."}

            </span>
          </div>
      </div>
    )
  }
}

export default About
