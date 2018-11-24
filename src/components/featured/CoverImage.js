import React from 'react';

// import slide_one from '../../resources/images/the_city_2.jpg';
// import slide_two from '../../resources/images/the_city_3.jpg';
// import slide_three from '../../resources/images/the_city_4.jpg';

const CoverImage = () => {
    return (
        <div
            className="carrousel_wrapper overlay"
            style={{
                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}
        >
        <div>
            <div 
                className="carrousel_image"                    
                style={{
                    // background: `url(${slide_one})`,
                    height: `${window.innerHeight}px`
                }}
            ></div>            
        </div>
    </div>
    )
}

export default CoverImage;