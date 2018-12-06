import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import AuthChecker from './AuthChecker';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';


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
            <MDBContainer className="d-flex justify-content-center">
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody className="mx-4">
                                <div className="text-center">
                                    <h3 className="dark-grey-text mb-5">
                                        <strong>Sign in</strong>
                                    </h3>
                                </div>
                            <MDBInput 
                            label="Your email"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                            onChange={this.handleEmailChange} 
                            />
                            <MDBInput
                            label="Your password"
                            group
                            type="password"
                            validate
                            containerClass="mb-0"
                            onChange={this.handlePasswordChange}
                            />
                            <p className="font-small d-flex justify-content-end pb-3 status">{this.state.authMessage}</p>
                            <p className="font-small blue-text d-flex justify-content-end pb-3">
                            Forgot
                            <a href="#!" className="blue-text ml-1">Password?</a>
                            </p>
                            <div className="text-center mb-3">
                            <MDBBtn
                            type="button"
                            gradient="blue"
                            rounded
                            className="btn-block z-depth-1a"
                            onClick={this.handleSubmit}
                            >Sign in
                            </MDBBtn>
                        </div>
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign in with:</p>
                        <MDBRow className="d-flex justify-content-center">
                            <MDBBtn
                            type="button"
                            color="white"
                            rounded
                            >
                                <MDBIcon icon="facebook" className="blue-text text-center" />
                            </MDBBtn>
                            <MDBBtn
                            type="button"
                            color="white"
                            rounded
                            >
                                <MDBIcon icon="twitter" className="blue-text" />
                            </MDBBtn>
                            <MDBBtn
                            type="button"
                            color="white"
                            rounded
                            >
                                <MDBIcon icon="google-plus" className="blue-text" />

                            </MDBBtn>
                        </MDBRow>
                        </MDBCardBody>
                    <MDBModalFooter className="mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-end">Not a member?
                        <a href="./register" className="blue-text ml-1">Non-profit? Join us to recycle the clothes...</a>
                    </p>
                    </MDBModalFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        </div>
        )
    }
}

export default Login;
