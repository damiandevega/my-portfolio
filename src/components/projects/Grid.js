import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Bounce from 'react-reveal/Bounce';

import Media from './Media';

import developer_connector from "./images/developer-connector.png";
import bloom_kauai from "./images/bloom-kauai.png";
import animal_hospital from "./images/animal-hospital.png";
import grand_hotel from "./images/grand-hotel.png";
import data_visualization from "./images/data-visualization.png";
import furniture_store from "./images/furniture-store.png";

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

      <Grid item xs={12} sm={6} md={4}>
            <Bounce left delay={0} duration={1300}>
                <Media 
                    imagePath={grand_hotel} 
                    title="grand hotel" 
                    description="A hotel website to view rooms and services offered"
                    link="http://grand-hotel.s3-website-us-east-1.amazonaws.com/"
                />
            </Bounce>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
            <Bounce left delay={250} duration={1300}>
                <Media 
                    imagePath={furniture_store} 
                    title="furniture store" 
                    description="A furniture store landing page with gallery using CSS Grid"
                    link="http://furniture-store.s3-website-us-east-1.amazonaws.com/"
                />
            </Bounce>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
            <Bounce left delay={500} duration={1300}>
                <Media 
                    imagePath={bloom_kauai} 
                    title="bloom kauai" 
                    description="Floral business in Kauai for flower crowns, bouquets, arrangements, ceremonies etc."
                    link="http://kauai-flowers.s3-website-us-west-1.amazonaws.com/"
                />
            </Bounce>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
            <Bounce right delay={0} duration={1300}>
                <Media 
                    imagePath={developer_connector} 
                    title="developer connector" 
                    description="A social network for developers to connect and ask questions"
                    link="http://www.developerconnector.com/"
                />
            </Bounce>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
            <Bounce right delay={250} duration={1300}>
                <Media 
                    imagePath={data_visualization} 
                    title="data visualization" 
                    description="A data visualization app written in ReactJS and using HighCharts"
                    link="http://data-visualization-demo.s3-website-us-east-1.amazonaws.com/"
                />
            </Bounce>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
            <Bounce right delay={500} duration={1300}>
                <Media 
                    imagePath={animal_hospital} 
                    title="animal hospital" 
                    description="Animal hospital website focused on veterinary services"
                    link="http://animal-hospital-website-dev.s3-website-us-east-1.amazonaws.com/index.html"
                />
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