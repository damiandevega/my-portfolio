import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Slide from 'react-reveal/Slide';

import damian from "./images/damiandevega.png";

const styles = {
    root: {
        flexGrow: 1,
        marginTop: "100px"
    },
    row: {
        display: 'flex',
        justifyContent: 'center'
    },
    avatar: {
        margin: 'auto',
        marginTop: '25px',
        marginBottom: '25px'
    },
    bigAvatar: {
        width: 340,
        height: 340,
    }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Grid container>
            <Grid item xs={12} sm={12} md={6}>
                <Slide left duration={1000}>
                    <Avatar
                        alt="Damian de Vega"
                        src={damian}
                        className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                </Slide>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Slide right duration={1000}>
                    <h1 style={{ textAlign: 'center', color: "#25cefc" }}>bio</h1>
                </Slide>
                <Slide right delay={250} duration={1000}>
                    <p style={{ 
                        textAlign: 'left', 
                        paddingLeft: '40px', 
                        paddingRight: '40px', 
                        paddingBottom: '25px',
                        color: "#4C4C4C"
                    }}>
                        I have a Bachelor of Science degree in Information Management and Technology from Syracuse University. I am an experienced full stack web developer and work with languages such as HTML, CSS, and JavaScript. I also use libraries such as ReactJS, Redux, jQuery, Axios, and many more.
                        <br></br><br></br>
                        I love challenges to come up with creative, intriguing projects, making sure to build functional user interfaces that people will enjoy. I thrive on working in fast-paced environments and being part of a team. 
                        <br></br><br></br>
                        Looking forward to hearing about new web development opportunities and am open to further discussions regarding future projects.
                        <br></br><br></br>
                        <p>“Success isn’t owned. It’s leased. And rent is due every day.”  - J. J. Watts</p>
                    </p>
                </Slide>
            </Grid>
        </Grid>
  </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);