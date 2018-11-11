import React, { Component } from 'react';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar'
import Header from '../components/header';

class UserPortal extends Component{

    render(){
        return(
            <div className="User-Portal">
                <Header/>
                <SideBar/>
                <Footer/>
            </div>
        )
    }
}

export default UserPortal;