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
        flexGrow: 1
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
                    <h1 style={{ textAlign: 'center' }}>my biography</h1>
                </Slide>
                <Slide right delay={250} duration={1000}>
                    <p style={{ textAlign: 'left', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '25px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus cumque voluptate vel expedita dignissimos reiciendis id architecto ut ratione sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium ab rerum sed corporis necessitatibus quam perferendis expedita facilis. Debitis consequatur iure illo deleniti, ullam ex voluptas dolore commodi illum.
                    <br></br><br></br>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus cumque voluptate vel expedita dignissimos reiciendis id architecto ut ratione sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium ab rerum sed corporis necessitatibus quam perferendis expedita facilis. Debitis consequatur iure illo deleniti, ullam ex voluptas dolore commodi illum.
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