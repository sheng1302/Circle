import React, {Component} from "react";
import '../styles/NonProfitPortal.css';
import SideBar from '../components/SideBar';
import ItemBox from '../components/ItemBox';


class NonProfitPortal extends Component{

    render(){
        return(
            <div className="NonProfit-Portal">

                <div className="row row-controller">
                    <div className="col-md-3">
                        <SideBar/>
                    </div>

                    <div className="col-md-9 right-body-content">
                        <div className="row">
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                            <div className="col-md-3">
                                <ItemBox message="this is an item box" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default NonProfitPortal;