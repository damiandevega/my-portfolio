import React from 'react';
import Cards from './Cards';
import Avatar from './Avatar';

// import Description from './Description';
// import Discount from './Discount';

const Highlights = () => {
  return (
    <div>
      <h1 style={{ 
        textAlign: "center", 
        padding: "30px", 
        fontSize: "48px" }}
        >about</h1>
      <div style={{ padding: "25px" }}>
        <Cards/>
      </div>
      <Avatar/>
      {/* <Description/>
      <Discount/> */}
    </div>
  )
}

export default Highlights;