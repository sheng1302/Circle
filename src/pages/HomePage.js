import React, { Component } from 'react';
import Footer from "../components/Footer";
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
                            <a className="btn-primary-white" href="./donate">Donate</a>
                            <a className="btn-primary-white" href="./non-profit">Non-profit</a>
                        </div>

                    </div>
                </div>
                <Footer/>

            </div>
        )
    }
}

export default HomePage;
