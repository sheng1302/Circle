import React, {Component} from 'react';
import '../styles/About.css';
import { PageHeader } from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system';
import ShengIMG from '../sources/sheng.jpg';

class About extends Component{

    render(){
        return(
            <div className="About-Portal">

               <div className="first-section">
                    <div className="container-fluid-self background-container2 parallax-visual" >
                        <div className="display"> 
                        <PageHeader className="title">Who We Are</PageHeader>
                        </div>
                    </div>
                </div>
                
                <div className="second-section">
                <Jumbotron className="content-container">
                    <h1>About Circle</h1>
                    <p>Circle is a web application that will encourage communities to decrease the amount ofsecondhand (but still useful!) items that get sent to landfills and recycling centers by prioritizingreusing over recycling. According to the EPA, over 13 million tons of textiles are trashed everyyear, even though nearly half of it is perfectly reusable. This is a statistic concerning onlyclothing, so it is hard to imagine just how much is being wasted overall. Circle will serve as amiddleman that will connect users who have items they no longer want to other users ornon­profit organizations that would like to make use of the secondhand items. Users will postitems that they no longer need on the web application, making it public to all users to view andrequest. Once a request is made, the user who posted the item would be notified and the twoparties would be set up to figure out a time and place to meet</p>    
                    <br></br>
                    <h1>Our Mission</h1>
                    <p>An organization that encourages people to donate items is Goodwill. However, thedifference between their model and ours is that people who have items to donate will have theoption to choose where they would like to go to drop off the items and that they can meet thepeople they are donating to. This enables users to be able to donate items regardless of their busyschedule or lack of ability to transport the items to distant locations. Our web application wouldgive another option for people who would like to donate their used items if going toorganizations like Goodwill do not work for them.</p>
                </Jumbotron>
                </div>


                <Jumbotron className="team-Jumbotron">
                    <h1>Meet our Team</h1>
                <Container className='team-container'>
                    <Row  className='row'>
                        <Col className='col-lg-6' lg={6}>
                        <img class ="rounded-circle" src={ShengIMG} alt="Generic placeholder image" width="200" height="200" />
                        <h2>Sheng Liu</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </Col>
                        <Col className='col-lg-6' lg={6}>
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="200" height="200" />
                        <h2>Kevin Thaw</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </Col>
                    </Row>

                    <Row  className='row'>
                        <Col className='col-lg-6' lg={6}>
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="200" height="200" />
                        <h2>Rachel Chen</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </Col>
                        <Col className='col-lg-6' lg={6}>
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="200" height="200" />
                        <h2>Jane Chen</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
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