import React, {Component} from 'react';
import '../styles/About.css';
import { PageHeader } from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system';
import ShengIMG from '../sources/sheng.jpg';
import RachelIMG from '../sources/rachel.jpg';
import JaneIMG from '../sources/jane.jpg';
import KevinIMG from '../sources/kevin.jpg';

class About extends Component{

    render(){
        return(
            <div className="About-Portal">

               <div className="first-section">
                    <div className="container-fluid-self background-container2 parallax-visual" >
                        <div className="display"> 
                        <PageHeader className="title">About Circle</PageHeader>
                        </div>
                    </div>
                </div>
                
                <div className="second-section">
                <Jumbotron className="content-container">
                    <h2>Our Mission</h2>
                    <p>Circle encourages communities to decrease the amount of secondhand (but still useful!) items that get sent to landfills and recycling centers by prioritizing reusing over recycling. According to the EPA, over 13 million tons of textiles are trashed every year, even though nearly half of it is perfectly reusable. This is a statistic concerning only clothing, so just imagine vast amount of items being wasted overall.</p>

                    <br/>

                    <h2>What We Do</h2>
                    <p>Circle serves as a middleman that will connect users who have items they no longer want to other users and non­profit organizations that would like to make use of the secondhand items. Users will post items that they no longer need on the web application, making it public to all users to view and request. Once a request is made, the user who posted the item would be notified and the two parties would be set up to figure out a time and place to meet.</p>
                </Jumbotron>
                </div>


                <Jumbotron className="team-Jumbotron">
                    <h1>Meet our Team</h1>
                <Container className='team-container justify-content-center'>
                    <Row className='row'>
                        <Col id='sheng' className='col-lg-6' lg={6}>
                            <img class ="rounded-circle" src={ShengIMG} alt="Generic placeholder image" width="200" height="200" />
                            <h2>Sheng Liu</h2>
                            <p>Computer Science Major at Brooklyn College</p>
                            <p>Full Stack Developer</p>
                            <p><a class="btn btn-secondary" href="#sheng" role="button">View details &raquo;</a></p>
                        </Col>
                        <Col className='col-lg-6' lg={6}>
                        <img class="rounded-circle" src={KevinIMG} alt="Generic placeholder image" width="200" height="200" />
                        <h2>Kevin Thaw</h2>
                        <p>Computer Science Major at Brooklyn College</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </Col>
                    </Row>

                    <Row  className='row'>
                        <Col className='col-lg-6' lg={6}>
                        <img class="rounded-circle" src={RachelIMG} alt="Generic placeholder image" width="200" height="200" />
                        <h2>Rachel Chen</h2>
                        <p>Computer Information System Major at Baruch College</p>
                        <p>Front-end Developer</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </Col>
                        <Col className='col-lg-6' lg={6}>
                        <img class="rounded-circle" src={JaneIMG} alt="Generic placeholder image" width="200" height="200" />
                        <h2>Jane Chen</h2>
                        <p>Computer Science Major at The City College of New York</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </Col>
                    </Row>
                </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default About;