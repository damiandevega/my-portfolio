import React from 'react';

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