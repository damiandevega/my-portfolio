import React from 'react';
import Slide from 'react-reveal/Slide';

const Contact = () => {
  return (
    <div style={{ 
        textAlign: "center",
        paddingBottom: "60px" 
        }}>
        <Slide left duration={1000}>
            <h1 style={{ 
                paddingTop: "50px",
                paddingBottom: "30px",
                marginBottom: "0",                    
                fontSize: "48px"
            }}
            >contact</h1>
        </Slide>

        <Slide right>
            <p>Feel free to reach out regarding new projects and opportunities! Thank you.</p>
        </Slide>

        <Slide left>
            <p>(201)779-6219</p>
        </Slide>

        <Slide right>
            <p>damiandevega@gmail.com</p>
        </Slide>

    </div>
  )
}

export default Contact;