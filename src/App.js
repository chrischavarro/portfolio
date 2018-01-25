import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticleBG from './components/Particles';
import MobileParticles from './components/MobileParticles';
import { AnimatedRoute, AnimatedSwitch, spring } from 'react-router-transition';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function glide(val) {
  return spring(val, {
    stiffness: 200,
    damping: 24,
  });
}

function slide(val) {
  return spring(val, {
    stiffness: 125,
    damping: 16,
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100
  },
  atLeave: {
    offset: glide(100),
  },
  atActive: {
    offset: glide(0),
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 399 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  renderParticles() {
    if (this.state.width < 400) {
      var value = 20
    } else {
      var value = 60
    }
    console.log(value)
    return <ParticleBG num={60} />

    setTimeout(function() {
      console.log('Return background')
    }, 0
    )
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          {this.renderParticles()}
          <AnimatedSwitch
            atEnter={pageTransitions.atEnter}
            atLeave={pageTransitions.atLeave}
            atActive={pageTransitions.atActive}
            mapStyles={(styles) => ({
              transform: `translateX(${styles.offset}%)`,
            })}
            className="route-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </AnimatedSwitch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// <AnimatedRoute
// exact path="/"
// component={Home}
// atEnter={ {offset: 100 }}
// atLeave={ {offset: -100}}
// atActive={ {offset: 0} }
// mapStyles={(styles) => ({
//   transform: `translateX(${styles.offset}%)`,
// })}
// className=""
// />
// <AnimatedRoute
// exact path="/about"
// component={About}
// atEnter={ {offset: 100 }}
// atLeave={ {offset: -100}}
// atActive={ {offset: 0} }
// mapStyles={(styles) => ({
//   transform: `translateX(${styles.offset}%)`,
// })}
// className=""
// />
// <AnimatedRoute
// exact path="/skills"
// component={Skills}
// atEnter={ {offset: 100 }}
// atLeave={ {offset: -100}}
// atActive={{offset: 0} }
// className=""
// mapStyles={(styles) => ({
//   transform: `translateX(${styles.offset}%)`,
// })}
// />
// <AnimatedRoute
// exact path="/projects"
// component={Projects}
// atEnter={ bounceTransition.atEnter }
// atLeave={ bounceTransition.atLeave }
// atActive={ bounceTransition.atActive }
// className=""
// mapStyles={(styles) => ({
//   transform: `translateX(${styles.offset}%)`,
// })}
// />
// <AnimatedRoute
// exact path="/contact"
// component={Contact}
// atEnter={ pageTransitions.atEnter }
// atLeave={ pageTransitions.atLeave }
// atActive={ pageTransitions.atActive }
// className=""
// mapStyles={(styles) => ({
//   transform: `translateX(${styles.offset}%)`,
// })}
// />
