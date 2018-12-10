import React, {Component} from "react";
import ItemBox from '../components/ItemBox';
import sizeMe from 'react-sizeme';
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

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
        const { width } = this.props;
        return(
            <div className="NonProfit-Portal">


                                {this.state.items.map((item, index) => {
                                    return (
                                        <StackGrid columnWidth={width <= 768 ? '100%' : '33.3%'}>

                                        <div id={index+1} key={"key1"}>
                                            <ItemBox title={item.description}
                                                    category={item.category} 
                                                    date={item.createdAt} 
                                                    description={item.description} 
                                                    image={item.item_pic_url} 
                                                    address={item.pick_up_address} 
                                                    item={item} /> {/*item is the item itself to be reference ..*/}
                                        </div>
                                        </StackGrid>


                                    )})
                                }

                </div>
        );
    }
}

export default sizeMe()(NonProfitPortal);