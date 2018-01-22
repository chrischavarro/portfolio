import React from 'react'
import Particles from 'react-particles-js';

function ParticleBG() {
  return (
    <div>
      <Particles style={{ position: 'absolute' }}
        className= "mobileParticleWrapper"
        canvasClassName="mobileParticleCanvas"
        params={{
        particles: {
          number: {
            value: 20
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
      />
    </div>
  )
}

export default ParticleBG;
