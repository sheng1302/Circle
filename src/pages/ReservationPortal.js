import React, { Component } from 'react';
import AuthChecker from '../components/AuthChecker';
import ReservedItemList from '../components/ReservedItemList';


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
                if(resp.status === 200){
                    return resp.json();
                }
                console.log(resp.message);
            }).then((result)=>{

                console.log(result);
                this.setState({items : result});

            }).catch((err)=>{
                console.log(err);
        })
    }


    render(){
        return(
            <div className={'reservation-portal'}>

                <ReservedItemList
                    itemList={this.state.items}
                 />
            </div>
        )
    }
}

export default ReservationPortal;