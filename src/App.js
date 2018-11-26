import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';

import Featured from './components/featured';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="about">
          <About/>
        </Element>

        <Element name="projects">
          <Projects/>
        </Element>

        <Element name="contact">
          <Contact/>
        </Element>

        <Footer/>
      </div>
    );
  }
}

export default App;
