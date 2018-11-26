import React, {Component} from "react";
import '../styles/UserPortal.css';
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
            this.setState({
                items: result,
            })
        })
    }

    render(){
        
        return(
            <div className="NonProfit-Portal">
                <div className="body-container">
                <div className="row">
                    <div className="col-md-3">
                        <SideBar/>
                    </div>

                    <div>
                        {this.state.items.map((item) => {
                            return <ItemBox title={item.description} category={item.category} date={item.createdAt} description={item.description}></ItemBox>

                        })
                        }
                    </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default NonProfitPortal;