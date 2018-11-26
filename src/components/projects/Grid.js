import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Bounce from 'react-reveal/Bounce';

import animal_hospital from "./images/animal-hospital.png";
import github_finder from "./images/github-finder.png";
import movie_info from "./images/movie-info.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: "100px",
    margin: "24px",
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

        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Bounce left duration={1300}>
                <Paper className={classes.paper}>
                    <div className="hovereffect">
                        <img style={{ width: "100%", height: "100%" }} className="hovereffect" src={animal_hospital}></img>
                        <div className="overlay">
                            <h2>Animal Hospital</h2>
                            <p style={{color: "lightblue"}}><strong>project description</strong></p>
                            <a className="info" href="http://animal-hospital-website-dev.s3-website-us-east-1.amazonaws.com/index.html" target="_blank">go to site</a>
                        </div>
                    </div>
                </Paper>
            </Bounce>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Bounce right delay={250} duration={1300}>
                <Paper className={classes.paper}>
                    <div className="hovereffect">
                        <img style={{ width: "100%", height: "100%" }} className="hovereffect" src={movie_info}></img>
                        <div className="overlay">
                            <h2>Movie Info</h2>
                            <p style={{color: "lightblue"}}><strong>project description</strong></p>
                            <a className="info" href="http://movie-info.s3-website-us-west-2.amazonaws.com/index.html" target="_blank">go to site</a>
                        </div>
                    </div>
                </Paper>
            </Bounce>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Bounce left delay={500} duration={1300}>
                <Paper className={classes.paper}>
                    <div className="hovereffect">
                        <img style={{ width: "100%", height: "100%" }} className="hovereffect" src={github_finder}></img>
                        <div className="overlay">
                            <h2>Github Finder</h2>
                            <p style={{color: "lightblue"}}><strong>project description</strong></p>
                            <a className="info" href="http://github-finder.s3-website-us-west-2.amazonaws.com/" target="_blank">go to site</a>
                        </div>
                    </div>                
                </Paper>
            </Bounce>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Bounce right delay={500} duration={1300}>
                <Paper className={classes.paper}>
                    <div className="hovereffect">
                        <img style={{ width: "100%", height: "100%" }} className="hovereffect" src={github_finder}></img>
                        <div className="overlay">
                            <h2>Github Finder</h2>
                            <p style={{color: "lightblue"}}><strong>project description</strong></p>
                            <a className="info" href="http://github-finder.s3-website-us-west-2.amazonaws.com/" target="_blank">go to site</a>
                        </div>
                    </div>
                </Paper>
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