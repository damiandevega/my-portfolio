import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Bounce from 'react-reveal/Bounce';

import Media from './Media';

import developer_connector from "./images/developer-connector.png";
import bloom_kauai from "./images/bloom-kauai.png";
import animal_hospital from "./images/animal-hospital.png";
import movie_info from "./images/movie-info.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: "120px",
    width: "100%"
  },
  paper: {
    // padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'center',
    backgroundSize: 'cover',
    margin: 'auto',
    height: '500px'
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Bounce left delay={0} duration={1300}>
                <Media 
                    imagePath={developer_connector} 
                    title="developer connector" 
                    description="A social network for developers to connect and ask questions"
                    link="http://www.developerconnector.com/"
                />
                {/* <Paper className={classes.paper}>
                    <div className="hovereffect">
                        <img className="card" src={developer_connector} alt="developer connector"></img>
                        <div className="overlay">
                            <h2>developer connector</h2>
                            <p style={{color: "lightblue"}}><strong>project description</strong></p>
                            <a className="info" href="http://github-finder.s3-website-us-west-2.amazonaws.com/" target="_blank" rel="noopener noreferrer">go to site</a>
                        </div>
                    </div>
                </Paper> */}
            </Bounce>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Bounce right delay={0} duration={1300}>
                <Media 
                    imagePath={bloom_kauai} 
                    title="bloom kauai" 
                    description="Floral business in Kauai for leis, flower crowns, bouquets, arrangements, ceremonies etc."
                    link="http://kauai-flowers.s3-website-us-west-1.amazonaws.com/"
                />
                {/* <Paper className={classes.paper}>
                    <div className="hovereffect">
                        <img style={{ position: "relative", width: "100%", height: "100%" }} className="hovereffect" src={bloom_kauai} alt="bloom kauai"></img>
                        <div className="overlay">
                            <h2>bloom kauai</h2>
                            <p style={{color: "lightblue"}}><strong>project description</strong></p>
                            <a className="info" href="http://kauai-flowers.s3-website-us-west-1.amazonaws.com/index.html" target="_blank" rel="noopener noreferrer">go to site</a>
                        </div>
                    </div>
                </Paper> */}
            </Bounce>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Bounce left delay={0} duration={1300}>
                <Media 
                    imagePath={animal_hospital} 
                    title="animal hospital" 
                    description="Animal hospital website focused on veterinary services"
                    link="http://animal-hospital-website-dev.s3-website-us-east-1.amazonaws.com/index.html"
                />
                {/* <Paper className={classes.paper}>
                    <div className="hovereffect">
                        <img style={{ width: "100%", height: "100%" }} className="hovereffect" src={animal_hospital} alt="animal hospital"></img>
                        <div className="overlay">
                            <h2>Animal Hospital</h2>
                            <p style={{color: "lightblue"}}><strong>project description</strong></p>
                            <a className="info" href="http://animal-hospital-website-dev.s3-website-us-east-1.amazonaws.com/index.html" target="_blank" rel="noopener noreferrer">go to site</a>
                        </div>
                    </div>
                </Paper> */}
            </Bounce>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Bounce right delay={0} duration={1300}>
                <Media 
                    imagePath={movie_info} 
                    title="movie info" 
                    description="A fun search tool to find your favorite movies or shows from their titles"
                    link="http://movie-info.s3-website-us-west-2.amazonaws.com/index.html"
                />
                {/* <Paper className={classes.paper}>
                    <div className="hovereffect">
                        <img style={{ width: "100%", height: "100%" }} className="hovereffect" src={movie_info} alt="movie info"></img>
                        <div className="overlay">
                            <h2>Movie Info</h2>
                            <p style={{color: "lightblue"}}><strong>project description</strong></p>
                            <a className="info" href="http://movie-info.s3-website-us-west-2.amazonaws.com/index.html" target="_blank" rel="noopener noreferrer">go to site</a>
                        </div>
                    </div>
                </Paper> */}
            </Bounce>
        </Grid>

      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);