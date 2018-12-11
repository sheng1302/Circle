import React, {Component} from "react";
import ItemList from '../components/ItemList';

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
                <ItemList
                    itemList={this.state.items}/>
            </div>
        );
    }
}

export default NonProfitPortal;