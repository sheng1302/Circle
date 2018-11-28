import React, {Component} from 'react';


class Register extends Component{

    render(){
        return(
            <div className="nonprofit-registration-portal">
                email:  <input className="input-email" type="text"/>
                password:  <input className="input-password"  type="password"/>
                organization: <input className="input-org" type="text"/>

                <button className="btn btn-primary">Request Registration</button>
                <p className="statusBar">Note: registration requires human checks. You will be notified within the next 48 hours</p>

            </div>
        )
    }

}

export default Register;