import React from 'react'
import Particles from 'react-particles-js';

function ParticleBG(props) {
  return (
    <div>
      <Particles style={{ position: 'absolute' }}
        className= "particleWrapper"
        canvasClassName="particleCanvas"
        params={{
        particles: {
          number: {
            value: props.num
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
            onresize: {
              enable: true,
              density_auto: true,
              density_area: 10
            },
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
