import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="bck_black">
      <Fade delay={500}>
        {/* <div className="font_righteous footer_logo_venue">damian de vega</div> */}
        <div className="footer_copyright">
            damian de vega | portfolio 2018. All rights reserved.
        </div>
      </Fade>
    </footer>
  )
}

export default Footer;