import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
        <div style={{ width: "100%", textAlign: "center" }}>
            <img style={{ height: "100px", marginBottom: "10px"}} src={efficient} alt="efficient"></img>
        </div>
          <Paper className={classes.paper}>
            <h2>efficient</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, itaque.</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <div style={{ width: "100%", textAlign: "center" }}>
            <img style={{ height: "100px", marginBottom: "10px"}} src={compatible} alt="compatible"></img>
        </div>
          <Paper className={classes.paper}>
            <h2>compatible</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ad praesentium quae!</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img style={{ height: "100px", marginBottom: "10px"}} src={user_friendly} alt="user-friendly"></img>
        </div>
          <Paper className={classes.paper}>
            <h2>user-friendly</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit quas aspernatur distinctio!</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img style={{ height: "100px", marginBottom: "10px"}} src={creative} alt="creative"></img>
        </div>
          <Paper className={classes.paper}>
            <h2>creative</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, commodi officia.</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);