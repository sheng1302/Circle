import React, {Component} from 'react';
import logo from '../sources/circle_logo.png';
import '../styles/Footer.css'; // using footer style

class Footer extends Component{


    render() {
        return(
            <div className="company-background-container">

                <div className="container-section-one">
                    <img className="circle-logo" src={logo} alt="Circle Logo"/>
                </div>

                <div className="container-section-two">
                    <p className="section-two-copyright">
                        Copyright © 2018 Circle. All Right Reserved.
                    </p>

                </div>

            </div>
        )
    }

}

export default Footer;
