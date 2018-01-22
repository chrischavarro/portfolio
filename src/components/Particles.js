import React from 'react'
import Particles from 'react-particles-js';

function ParticleBG() {
  return (
    <div>
      <Particles style={{ position: 'absolute' }}
        className= "particleWrapper"
        canvasClassName="particleCanvas"
        params={{
        particles: {
          number: {
            value: 60
          },
          opacity: {
            value: 1
          },
          line_linked: {
            distance: 100,
            opacity: 0.4,
            shadow: {
              enable: false,
              color: "#3CA9D1",
              blur: 5
            }
          }
        },
        move: {
          speed: 0
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            }
          }
        }
        }}
        style={{
          // zDepth: -1,
          backgroundColor: 'rgba(33, 34, 38, 1)'
        }}
      />
    </div>
  )
}

export default ParticleBG;
