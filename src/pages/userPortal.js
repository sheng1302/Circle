import React, { Component } from 'react';
import Footer from '../components/footer';
import SideBar from '../components/SideBar'

class UserPortal extends Component{

    render(){
        return(
            <div className="User-Portal">
                <Footer/>
                <SideBar/>
            </div>
        )
    }
}

export default UserPortal;