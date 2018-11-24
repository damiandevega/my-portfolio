import React, { Component } from 'react';

class SocialMediaBar extends Component {
    render() {
        return (
            <div className="countdown_wrapper">
                <div className="icon-bar">
                    <a href="https://github.com/damiandevega" className="github"><i className="fa fa-github"></i></a> 
                    <a href="https://www.linkedin.com/in/damian-de-vega-64333a66/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        )
    }
}

export default SocialMediaBar;