import React, {Component} from 'react';


const authChecker = {

    isAuthenticated : false ,
    authenticate(email, pass, cb, cb_failAuth){
        fetch('/auth/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: email,
                password: pass,
            }),
        }).then((response)=>{

                if(response.status === 200){
                    this.isAuthenticated = true;
                    return response.json();
                } else if(response.status === 401){
                    return response.json();
                } else{
                    console.log(response);
                }
            })
            .then( (body) => {
                if(this.isAuthenticated){
                    cb();
                } else{
                    cb_failAuth(body.message[0]);
                }

            })
            .catch((err) => {
                console.log(err);
            });

    },  signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};


class LoginBox extends Component{
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

        authChecker.authenticate(this.state.email, this.state.password, () => {
            this.setState({ redirectToReferrer: true });
            this.setState({ authMessage: ''});
        }, (message) => {
            this.setState({ authMessage: message});
        });

    };

    render(){

        return(

            <div className="loginBox">
            { (this.state.redirectToReferrer) ? <div> You have login!  </div>: <div> Email: <input className="input-email" onChange={this.handleEmailChange} type="text"/>
                Password: <input className="input-password" onChange={this.handlePasswordChange} type="password"/>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button> </div>
            }

            <div className="login-status">
                <p className="status">{this.state.authMessage}</p>
            </div>
            </div>



        )
    }
}

export default LoginBox;