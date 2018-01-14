import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { AnimatedSwitch, spring } from 'react-router-transition';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
          </AnimatedSwitch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


// <div style={{ position: 'relative', top: '110px' }}>
//
//   <Row>
//     <Col s={4} className='grid-example' >
//       <Card style={{ backgroundColor: '#2B4162' }} header={<CardTitle reveal image={"img/office.jpg"} waves='light' /> }
//           title="About"
//           reveal={<p>Im a Miami native looking to transition into a web development role after working in a tech start-up marketing role for the past two years</p>}>
//       </Card>
//     </Col>
//     <Col s={4} className='grid-example'>
//       <Card style={{ backgroundColor: '#385F71' }} header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
//           title="Education"
//           reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
//       </Card>
//     </Col>
//     <Col s={4} className='grid-example'>
//       <Card style={{ backgroundColor: '#F5F0F6' }} header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
//           title="Skills"
//           reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
//       </Card>
//     </Col>
//   </Row>
//   <Row>
//     <Col s={6} className='grid-example'>
//       <Card style={{ backgroundColor: '#D7B377' }} header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
//           title="Projects"
//           reveal={
//             <Modal
//               header='Small Victory'
//               trigger={<Button>Small Victory</Button>}>
//               <p class="project_description">Gives users a daily five-minute task according to their selected track. Tracks are suggested based on user-selected interests during the signup process. The dashboard serves as a visual representation of user progress on a weekly, monthly, and yearly scale.</p>
//
//               <p class="project_description">Won the following awards at the October 2016 Ironhack Hack Show: <br/>
//               Most Innovative Idea <br/>
//               Best User Experience <br/>
//               1st Place</p>
//
//             </Modal>
//           }>
//       </Card>
//     </Col>
//     <Col s={6} className='grid-example'>
//       <Card style={{ backgroundColor: '#8F754F' }} header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
//           title="Contact"
//           reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
//       </Card>
//     </Col>
//   </Row>
//
// </div>
