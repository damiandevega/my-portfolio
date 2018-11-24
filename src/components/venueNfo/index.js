import React from 'react';
import Zoom from 'react-reveal/Zoom';
// import Grid from '@material-ui/core/Grid';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueNfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
            {/* <Grid container> */}
                {/* <Grid item xs> */}
                <Zoom duration={500}>
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                <div 
                                    className="vn_icon"
                                    style={{
                                        background: `url(${icon_calendar})`
                                    }}
                                ></div>
                                <div className="vn_title">
                                    Event Date & Time
                                </div>
                                <div className="vn_desc">
                                    August 7 2018 @10:00pm
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
                {/* </Grid> */}

                {/* <Grid item xs> */}
                <Zoom duration={500} delay={500}>
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow"></div>
                                <div 
                                    className="vn_icon"
                                    style={{
                                        background: `url(${icon_location})`
                                    }}
                                ></div>
                                <div className="vn_title">
                                    Event Location
                                </div>
                                <div className="vn_desc">
                                    2914 S Curson Ave Los Angeles, CA
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
                {/* </Grid> */}
            {/* </Grid> */}

        </div>
      </div>
    </div>
  )
}

export default VenueNfo;