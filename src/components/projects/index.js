import React from 'react';
import Slide from 'react-reveal/Slide';
import Grid from './Grid';

const Projects = () => {
  return (
    <div style={{backgroundColor: "#fdfcf8"}}>
        <Slide right duration={1000}>
            <h1 style={{ 
            textAlign: "center", 
            paddingTop: "100px",
            paddingBottom: "60px",
            marginBottom: "0",
            fontSize: "48px"
        }}
        >projects</h1>       
        </Slide>
        <Grid/>
    </div>
  )
}

export default Projects;