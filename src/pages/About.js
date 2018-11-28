import React, {Component} from 'react';

class About extends Component{

    render(){
        return(
            <div className="About-Portal">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="author-image" src="#" alt="Sheng Liu"/>
                                <h3 className="author-name">Sheng Liu</h3>
                                <p className="author-description">Description of Sheng Liu</p>
                            </div>

                            <div className="col-md-3">
                                <img className="author-image" src="#" alt="Kevin Thaw"/>
                                <h3 className="author-name">Kevin Thaw</h3>
                                <p className="author-description">Description of Kevin Thaw</p>
                            </div>

                            <div className="col-md-3">
                                <img className="author-image" src="#" alt="Jane Chen"/>
                                <h3 className="author-name">Jane Chen</h3>
                                <p className="author-description">Description of Jane Chen</p>
                            </div>

                            <div className="col-md-3">
                                <img className="author-image" src="#" alt="Rachael"/>
                                <h3 className="author-name">Rachael</h3>
                                <p className="author-description">Rachael</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default About;