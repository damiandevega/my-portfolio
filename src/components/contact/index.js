import React from 'react';
import Slide from 'react-reveal/Slide';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import amazon_cert from './images/AWS_Certified_Logo_294x230_Color.png';
import developer from './images/AWS_Certified_Tag__DVA_294x230-Black.png';
import resume from './resume/damian_de_vega_resume.pdf';

const styles = theme => ({
    button: {
        textTransform: 'lowercase'
    //   margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const Contact = (props) => {
    const { classes } = props;

    return (
        <div style={{ 
            textAlign: "center",
            paddingBottom: "60px" 
            }}>
            <Slide left duration={1000}>
                <h1 style={{ 
                    paddingTop: "50px",
                    paddingBottom: "30px",
                    marginBottom: "0",                    
                    fontSize: "42px",
                    color: "#25cefc"
                }}
                >contact</h1>
            </Slide>

            <Slide right>
                <p style={{ color: "#4C4C4C" }}>damiandevega@gmail.com</p>
            </Slide>

            <Slide left>
                <p style={{ color: "#4C4C4C" }}>(201)779-6219</p>
            </Slide>

            <Grid container>
                <Grid item xs={12} sm={6} style={{ paddingTop: "40px", paddingBottom: "40px" }}>
                    <Slide left duration={1000}>
                        <div>
                            <a style={{ textDecoration: "none" }} href={resume} download="damian_de_vega_resume">
                            <Button variant="outlined" className={classes.button}>
                                download resume
                            </Button>
                            </a>
                        </div>
                    </Slide>
                </Grid>
                <Grid item xs={12} sm={6} style={{ paddingTop: "40px", paddingBottom: "40px" }}>
                    <Slide right duration={1000}>
                        <div>
                            <div style={{ width: "100%", margin: "auto", textAlign: "center" }}>
                                <img src={amazon_cert} alt="AWS Certified"></img>
                            </div>
                            <div style={{ width: "100%", margin: "auto", textAlign: "center" }}>
                                <img src={developer} alt="developer associate"></img>
                            </div>
                        </div>
                    </Slide>
                </Grid>
            </Grid>

        </div>
    )
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Contact);