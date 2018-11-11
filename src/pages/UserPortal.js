import React, { Component } from 'react';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import ItemBox from '../components/ItemBox';

class UserPortal extends Component{

    render(){
        return(
            <div className="User-Portal">

                <Header/>
                <div className="body-container">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBar/>
                        </div>

                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-3">
                                    <ItemBox message="this is an item box" />
                                </div>
                                <div className="col-md-3">
                                    <ItemBox message="this is an item box" />
                                </div>
                                <div className="col-md-3">
                                    <ItemBox message="this is an item box" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <ItemBox message="this is an item box" />
                                </div>
                                <div className="col-md-3">
                                    <ItemBox message="this is an item box" />
                                </div>
                                <div className="col-md-3">
                                    <ItemBox message="this is an item box" />
                                </div>
                            </div>


                        </div>

                    </div>
                </div>


                <Footer/>
            </div>
        )
    }
}

export default UserPortal;
