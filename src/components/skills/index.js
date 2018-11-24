import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

// import icon_calendar from '../../resources/images/icons/calendar.png';
// import icon_location from '../../resources/images/icons/location.png';

// const styles = theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing.unit * 2,
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   });

const Skills = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
      {/* <Grid item sm={12} xs={12}>
        <div className="center_wrapper pricing_section">
            <h2 style={{ width: "100%", textAlign: "center" }}>Skills</h2>
        </div>
      </Grid> */}
        <div className="vn_wrapper">
            <Grid container>
                <Grid item sm={4} xs={12}>
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    {/* <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_calendar})`
                                        }}
                                    ></div> */}
                                    <div className="vn_title" style={{ margin: "auto", paddingTop: 10, paddingBottom: 10 }}>
                                        HTML
                                    </div>
                                    {/* <div className="vn_desc">
                                        August 7 2018 @10:00pm
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    {/* <div className="vn_icon_square bck_yellow"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div> */}
                                    <div className="vn_title" style={{ margin: "auto", paddingTop: 10, paddingBottom: 10 }}>
                                        CSS
                                    </div>
                                    {/* <div className="vn_desc">
                                        2914 S Curson Ave Los Angeles, CA
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Zoom duration={500} delay={1000}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    {/* <div className="vn_icon_square bck_yellow"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div> */}
                                    <div className="vn_title" style={{ margin: "auto", paddingTop: 10, paddingBottom: 10 }}>
                                        JavaScript
                                    </div>
                                    {/* <div className="vn_desc">
                                        2914 S Curson Ave Los Angeles, CA
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Grid>

                <Grid item sm={4} xs={12}>
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    {/* <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_calendar})`
                                        }}
                                    ></div> */}
                                    <div className="vn_title" style={{ margin: "auto", paddingTop: 10, paddingBottom: 10 }}>
                                        HTML
                                    </div>
                                    {/* <div className="vn_desc">
                                        August 7 2018 @10:00pm
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    {/* <div className="vn_icon_square bck_yellow"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div> */}
                                    <div className="vn_title" style={{ margin: "auto", paddingTop: 10, paddingBottom: 10 }}>
                                        CSS
                                    </div>
                                    {/* <div className="vn_desc">
                                        2914 S Curson Ave Los Angeles, CA
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Zoom duration={500} delay={1000}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    {/* <div className="vn_icon_square bck_yellow"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div> */}
                                    <div className="vn_title" style={{ margin: "auto", paddingTop: 10, paddingBottom: 10 }}>
                                        JavaScript
                                    </div>
                                    {/* <div className="vn_desc">
                                        2914 S Curson Ave Los Angeles, CA
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Grid>

                <Grid item sm={4} xs={12}>
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    {/* <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_calendar})`
                                        }}
                                    ></div> */}
                                    <div className="vn_title" style={{ margin: "auto", paddingTop: 10, paddingBottom: 10 }}>
                                        HTML
                                    </div>
                                    {/* <div className="vn_desc">
                                        August 7 2018 @10:00pm
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    {/* <div className="vn_icon_square bck_yellow"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div> */}
                                    <div className="vn_title" style={{ margin: "auto", paddingTop: 10, paddingBottom: 10 }}>
                                        CSS
                                    </div>
                                    {/* <div className="vn_desc">
                                        2914 S Curson Ave Los Angeles, CA
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Zoom duration={500} delay={1000}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    {/* <div className="vn_icon_square bck_yellow"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div> */}
                                    <div className="vn_title" style={{ margin: "auto", paddingTop: 10, paddingBottom: 10 }}>
                                        JavaScript
                                    </div>
                                    {/* <div className="vn_desc">
                                        2914 S Curson Ave Los Angeles, CA
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Grid>

            </Grid>
        </div>
      </div>
    </div>
  )
}

export default Skills;