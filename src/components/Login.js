import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import AuthChecker from './AuthChecker';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            redirectToReferrer : false,
            authMessage : '',
        }
    }

    handleEmailChange = (e) => {

        console.log(e.target.value);
        this.setState({email : e.target.value});
    };

    handlePasswordChange = (e) => {

        this.setState({password : e.target.value});
    };

    handleSubmit = () => {

        AuthChecker.authenticate(this.state.email, this.state.password, () => {
            this.setState({ redirectToReferrer: true });
            this.setState({ authMessage: ''});
        }, (message) => {
            this.setState({ authMessage: message});
        });

    };

    render(){
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;
        return(

            <div className="loginBox">
            <div>
                Email: <input className="input-email" onChange={this.handleEmailChange} type="text"/>
                Password: <input className="input-password" onChange={this.handlePasswordChange} type="password"/>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>

                <p className="new-user"><a href='./register'>Non-profit? Join us to recycle the clothes...</a></p>
            </div>


            <div className="login-status">
                <p className="status">{this.state.authMessage}</p>
            </div>
            </div>



        )
    }
}

export default Login;