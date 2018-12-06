import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import AuthChecker from "./AuthChecker";

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            registerStatus : '',
            email : '',
            password : '',
            confirmPassWord : '',
            nonProfitName : '',
            address : '',

        }
    }


    handleEmailChange = (e) => {

        this.setState({email : e.target.value});
    };

    handleNameChange = (e) => {

        this.setState({nonProfitName : e.target.value});
    };


    handlePasswordChange = (e) => {

        this.setState({password : e.target.value});
    };

    handleAddressChange = (e) => {

        this.setState({address : e.target.value});
    };

    handleSubmit = (e) => {
        if(this.state.password !== this.state.confirmPassWord){
            this.setState( { registerStatus : "Password does not match! Check again."});
        } else if(this.state.address === '' || this.state.nonProfitName === ''){
            this.setState( { registerStatus : "Please fill out all the star fields."});
        } else{
            // make fetch calls
            fetch('/auth/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    username: this.state.nonProfitName,
                    address: this.state.address,
                    user_type: 'nonprofit',
                })
            }).then( (res) => {
                return res.json();
            }).then( (data) => {
                this.setState({registerStatus : data.message});
                console.log(data);
            }).catch( (err) => {
                console.log('error', err);
            })
        }

    };

    handlePasswordConfirmChange = (e) => {
        this.setState({confirmPassWord : e.target.value});
    };


    render(){
        return(
            <div className="nonprofit-registration-portal">

                <MDBContainer className="d-flex justify-content-center">
                    <MDBRow>
                        <MDBCol >
                            <MDBCard>
                                <MDBCardBody className="mx-4">
                                <div className="justify-content-center">
                                    <h3 className="dark-grey-text mb-5">
                                        <strong> - Become A Member - </strong>
                                    </h3>
                                </div>

                                <MDBInput
                                    label="Email*"
                                    type="email"
                                    error="wrong"
                                    success="right"
                                    onChange={this.handleEmailChange}
                                />

                                <MDBInput
                                    label="Password*"
                                    type="password"
                                    onChange={this.handlePasswordChange}
                                />

                                <MDBInput
                                    label="Confirm*"
                                    type="password"
                                    onChange={this.handlePasswordConfirmChange}
                                />
                                    <MDBInput
                                        label="Organization Name*"
                                        type="text"
                                        onChange={this.handleNameChange}
                                    />

                                    <MDBInput
                                        label="Organization Address*"
                                        type="text"
                                        onChange={this.handleAddressChange}
                                    />


                                    <div className="text-center mb-3">
                                    <MDBBtn
                                        type="button"
                                        gradient="peach"
                                        className="btn-block z-depth-1a"
                                        onClick={this.handleSubmit}>
                                        Sign Up
                                    </MDBBtn>
                                </div>
                                <p className="register-status">{this.state.registerStatus}</p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>

            </div>
        )
    }

}

export default Register;