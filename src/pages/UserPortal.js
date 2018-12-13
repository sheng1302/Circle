import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '../styles/UserPortal.css';
import Footer from "../components/Footer";

class UserPortal extends Component{
    constructor(props){
        super(props);
        this.state = {
            filePath : 'Choose an image file of the product!',
            fileDetail : null,
            name : '',
            email : '',
            phoneNum : '',
            pickUpAddress : '',
            donationCategory : '',
            description : '',
            formStatus : '',

        }
    }

    handleSubmit = (e) => {
        const data = new FormData();
        data.append('image', this.state.fileDetail);
        data.append('owner_id','1bb71fc0-fdc9-11e8-91c3-ef72bb587e0e'); //1bb71fc0-fdc9-11e8-91c3-ef72bb587e0e for build only***
        data.append('category',this.state.donationCategory);
        data.append('pick_up_address',this.state.pickUpAddress);
        data.append('reserved_status',false);
        data.append('description',this.state.description);

        fetch('/items/', {
                method: 'POST',
                body: data,
            }
        )
            .then( (res) => {
                console.log('status code', res.status);
                if(res.status === 201){
                    return res.json();
                } else if (res.status === 500) {
                    this.setState({ formStatus : 'Unexpected Error, please make sure you fill out all the inputs correctly.' });
                }else{
                    console.log(res.message);
                    this.setState({ formStatus : 'Unexpected Error, please try again later' });
                }


            })
            .then(
                (data) => {
                    this.setState({ formStatus : data.message });
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )



        //JSON.stringify({
        //                 ownder_id: 2,
        //                 category: this.state.donationCategory,
        //                 description: this.state.description,
        //                 pick_up_address: this.state.pickUpAddress,
        //                 reserved_status: false,
        //                 file : this.state.fileDetail,
        //             })

    };


    handleChange = (e) => {

        this.setState({filePath : e.target.files[0].name});
        this.setState({fileDetail : e.target.files[0]});
    };

    handleNameChange = (e) => {

        this.setState({name : e.target.value});

    };

    handleEmailChange = (e) => {

        this.setState({email : e.target.value});

    };

    handlePhoneChange = (e) => {

        this.setState({phoneNum : e.target.value});

    };

    handlePickUpAddChange = (e) => {

        this.setState({pickUpAddress : e.target.value});

    };

    handleDonationCategoryChange = (e) => {

        this.setState({donationCategory : e.target.value});

    };

    handleDescriptionChange = (e) => {

        this.setState({description: e.target.value});

    };

    render(){
        return(
            <div className="User-Portal parallax-visual">
            <MDBContainer className="d-flex justify-content-center">
                <MDBRow>
                    <MDBCol md="12">
                        <MDBCard>
                            <MDBCardBody>
                            <form className="user-portal-form" encType="multipart/form-data">
                                    
                                    <p className="h4 text-center py-4" id="donateText">Donate Now!</p>
                                    <p className="text">Our non profit organizations will contact you once we receive your information.</p>
                                    <br/>

                                    <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">Your name</label>
                                    <input type="text" id="defaultFormCardNameEx" className="form-control"  onChange={this.handleNameChange} placeholder="Elon Musk"/>
                                    <br />

                                    <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Your email</label>
                                    <input type="email" id="defaultFormCardEmailEx" className="form-control" onChange={this.handleEmailChange}  placeholder="e.musk@gmail.com"/>
                                    <br />

                                    <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Your phone number</label>
                                    <input type="tel" id="defaultFormCardPhoneEx" className="form-control" onChange={this.handlePhoneChange} placeholder="145-385-8796"/>
                                    <br />

                                    <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Enter Pickup Address</label>
                                    <input type="text" id="defaultFormCardAddressEx" className="form-control" onChange={this.handlePickUpAddChange} placeholder="199 Chamber Street. Brooklyn NY 11204"/>
                                    <br />

                                    <label htmlFor="defaultFormCardDescriptionEx" className="grey-text font-weight-light">Product Description</label>
                                    <textarea id="defaultFormCardDescriptionEx" className="form-control" onChange={this.handleDescriptionChange} placeholder=""/>
                                    <br />


                                    <label htmlFor="defaultFormCardTextEx" className="grey-text font-weight-light">Things you want to donate</label>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={this.handleDonationCategoryChange} type="checkbox" id="defaultCheck12"/>
                                        <label htmlFor="defaultCheck12" className="grey-text">Preserved Food</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={this.handleDonationCategoryChange} type="checkbox" id="defaultCheck12"/>
                                        <label htmlFor="defaultCheck12" className="grey-text">Clothes</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={this.handleDonationCategoryChange} type="checkbox" id="defaultCheck12"/>
                                        <label htmlFor="defaultCheck12" className="grey-text">Others</label>
                                    </div>


                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input
                                                name= 'image'
                                                type="file"
                                                name="image"
                                                className="custom-file-input"
                                                id="inputGroupFile01"
                                                aria-describedby="inputGroupFileAddon01"
                                                onChange={this.handleChange}
                                                accept="audio/*,video/*,image/*"
                                            />
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                {this.state.filePath}
                                            </label>
                                        </div>
                                    </div>


                                    <div className="text-center py-4 mt-3">
                                        <p>{this.state.formStatus}</p>
                                        <MDBBtn type="button" gradient="blue" rounded className="btn-block z-depth-1a" onClick={this.handleSubmit}>Submit</MDBBtn>
                                    </div>
                                </form>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

                <Footer/>
            </div>
        )
    }
}

export default UserPortal;
