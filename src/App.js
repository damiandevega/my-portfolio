import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import About from './components/about';
import Skills from './components/skills';
import VenueNfo from './components/venueNfo';

import Highlight from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        {/* <Element name="skills">
          <Skills/>
        </Element>

        <Element name="venuenfo">
          <VenueNfo/>
        </Element> */}

        <Element name="about">
          <About/>
        </Element>

        {/* <Element name="highlights">
          <Highlight/>
        </Element> */}

        {/* <Element name="pricing">
          <Pricing/>
        </Element> */}

        {/* <Element name="location">
          <Location/>
        </Element> */}

        <Footer/>
      </div>
    );
  }
}

export default App;
