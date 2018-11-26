import React from 'react';
import Cards from './Cards';
import Avatar from './Avatar';
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <div>
      <Slide left duration={1000}>
        <h1 style={{ 
          textAlign: "center", 
          padding: "30px", 
          paddingTop: "50px",
          fontSize: "42px",
          color: "#25cefc"
        }}>about</h1>
      </Slide>
      <div style={{ padding: "25px" }}>
        <Cards/>
      </div>
      <Avatar/>
    </div>
  )
}

export default About;