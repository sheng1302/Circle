import React, { Component } from 'react';
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';
import '../styles/HomePage.css';

class HomePage extends Component{

    render(){
        return(
            <div className="Home-Portal">

                <div className="first-section">
                    <div className="container-fluid-self background-container1 parallax-visual" >
                        <br/>

                        <div className="display">
                            <h3 className="display-h">Help Us Recycling The Clothes</h3>
                        </div>

                        <h3>"It's not at all important to get it right the first time. It's vitally important to get it right the last time."</h3>

                        <div className="s-buttons">
                            <Link className="btn-primary-white" to={"./donate"}>Donate</Link>
                            <Link className="btn-primary-white" to={"./non-profit"}>Non-profit</Link>
                        </div>

                    </div>
                </div>
                <Footer/>

            </div>
        )
    }
}

export default HomePage;
