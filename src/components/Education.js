import React, { Component } from 'react'

class Education extends Component {
  render() {
    return (
      <div className="col sm12 m12" style={{ padding: '0px' }}>
        <div className="" style={{ margin: '0', minHeight: '100vh' }}>
          <div className="card-content white-text col sm12 m12">
            <span
              className="card-title right-align"
              style={{ fontSize: '60pt', lineHeight: '90px', paddingTop: '5%', fontFamily: 'Lato', fontWeight: '400' }}
            >
              What Have I Learned?
            </span>

            <span
              className="card-title"
              style={{ textAlign: 'left', fontFamily: 'Lato', fontSize: '32pt', paddingTop: '', fontWeight: '100', lineHeight: '50px', marginLeft: '5%', marginRight: '30%' }}
            >
              <div>
                <span style={{ fontWeight: '500' }}>Florida International University</span><br/>
                <span >Bachelors, Public Relations</span>
              </div>
              <div>
                <span style={{ fontWeight: '500' }}>Ironhack</span><br/>
                <span>Full Stack Web Development</span> <br/>
                <span>Node, Express, React, MongoDB, Rails</span>
              </div>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Education
