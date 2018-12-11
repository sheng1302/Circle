import React, { Component } from 'react';
import AuthChecker from '../components/AuthChecker';
import ItemList from '../components/ItemList';


class ReservationPortal extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
        }
    }

    componentDidMount(){
        fetch(`/order/${AuthChecker.uid}`)
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
            <div className={'reservation-portal'}>

                <ItemList
                    itemList={this.state.items}
                />
            </div>
        )
    }
}

export default ReservationPortal;