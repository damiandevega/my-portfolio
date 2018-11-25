import React from 'react'
// import Carrousel from './Carrousel';
import CoverImage from './CoverImage';
import SocialMediaBar from './SocialMediaBar';

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* <Carrousel /> */}
      <CoverImage/>
      {/* <div className="artist_name">
        <div className="wrapper">
            Web Developer
        </div>
      </div> */}
      <SocialMediaBar/>
    </div>
  )
}

export default Featured;