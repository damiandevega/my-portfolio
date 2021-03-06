import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

import compatible from "./images/compatible.png";
import creative from "./images/creative.png";
import efficient from "./images/efficient.png";
import user_friendly from "./images/user-friendly.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 6,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '160px'
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={3}>
            <Zoom duration={500}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <img style={{ height: "100px", marginBottom: "10px"}} src={efficient} alt="efficient"></img>
                </div>
            </Zoom>

            <Bounce left duration={1300}>
                <Paper className={classes.paper}>
                    <h2>efficient</h2>
                    <p>Website speed and performance is always a top priority.</p>
                </Paper>
            </Bounce>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Zoom duration={500} delay={250}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <img style={{ height: "100px", marginBottom: "10px"}} src={compatible} alt="compatible"></img>
                </div>
            </Zoom>

            <Bounce left delay={250} duration={1300}>
                <Paper className={classes.paper}>
                    <h2>compatible</h2>
                    <p>Browser and device compatibility is a must-have. Responsiveness is key for web applications.</p>
                </Paper>
            </Bounce>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Zoom duration={500} delay={500}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <img style={{ height: "100px", marginBottom: "10px"}} src={user_friendly} alt="user-friendly"></img>
                </div>
            </Zoom>

            <Bounce left delay={500} duration={1300}>
                <Paper className={classes.paper}>
                    <h2>user-friendly</h2>
                    <p>Intuitive UX/UI experience for all types of web users.</p>
                </Paper>
            </Bounce>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Zoom duration={500} delay={750}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <img style={{ height: "100px", marginBottom: "10px"}} src={creative} alt="creative"></img>
                </div>
            </Zoom>

            <Bounce left delay={750} duration={1300}>
                <Paper className={classes.paper}>
                    <h2>innovative</h2>
                    <p>A touch of creativity is essential on the web in order to stand out.</p>
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