import React, { Component } from 'react';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar'

class UserPortal extends Component{

    render(){
        return(
            <div className="User-Portal">
                <SideBar/>
                <Footer/>
            </div>
        )
    }
}

export default UserPortal;