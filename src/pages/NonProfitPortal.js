import React, {Component} from "react";
import '../styles/NonProfitPortal.css';
import SideBar from '../components/SideBar';
import ItemBox from '../components/ItemBox';


class NonProfitPortal extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
        }
    }

    componentDidMount(){
        fetch('/items')
        .then((resp)=>{
            return resp.json();
        }).then((result)=>{
            console.log("results +++ "  + result);
            this.setState({
                items: result,
            })
        })
    }

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
                                {this.state.items.map((item) => {
                                    return <ItemBox title={item.description} category={item.category} date={item.createdAt} description={item.description} image={item.item_pic_url} address={item.pick_up_address} item={item}></ItemBox>

                                    })
                                }
                            </div>
                        </div>

                        {/*
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
                        */}
                    </div>

                </div>
            </div>
        )
    }
}

export default NonProfitPortal;