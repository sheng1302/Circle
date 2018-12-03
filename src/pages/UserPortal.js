import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import '../styles/UserPortal.css';

class UserPortal extends Component{

    render(){
        return(
            <div className="User-Portal">
            <MDBContainer className="mt-5 mb-5">
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <p className="h4 text-center py-4" id="donateText">Donate Now!</p>
                                    <p className="text">Our non profit organizations will contact you once we receive your information.</p>
                                    <br/>
                                    <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">Your name</label>
                                    <input type="text" id="defaultFormCardNameEx" className="form-control"  placeholder="Elon Musk"/>
                                    <br />
                                    <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Your email</label>
                                    <input type="email" id="defaultFormCardEmailEx" className="form-control"  placeholder="e.musk@gmail.com"/>
                                    <br />
                                    <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Your phone number</label>
                                    <input type="tel" id="defaultFormCardPhoneEx" className="form-control"  placeholder="145-385-8796"/>
                                    <br />
                                    <label htmlFor="defaultFormCardTextEx" className="grey-text font-weight-light">Things you want to donate</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="defaultCheck12"/>
                                        <label htmlFor="defaultCheck12" className="grey-text">Preserved Food</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="defaultCheck12"/>
                                        <label htmlFor="defaultCheck12" className="grey-text">Clothes</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="defaultCheck12"/>
                                        <label htmlFor="defaultCheck12" className="grey-text">Toys</label>
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                    <MDBBtn type="button" gradient="blue" rounded className="btn-block z-depth-1a">Submit</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        ) 
    }
}

export default UserPortal;
