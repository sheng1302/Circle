import React, { Component } from 'react';
import AuthChecker from './AuthChecker';
import ItemTitle from './ItemTitle';
import ItemImage from './ItemImage';
import ItemDescription from './ItemDescription';
import ItemAddress from './ItemAddress';
import Category from './Category';
import DateModified from './DateModified';

class ItemBox extends Component {
  render() {
    return (
        <div className="box-item">
            <ItemTitle title={this.props.title} />
            <ItemImage imageSource={this.props.image} />
            <Category category={this.props.category} />
            <DateModified date={this.props.date} />
            <ItemAddress address={this.props.address} />
            <ItemDescription description={this.props.description}/>
            <ItemReserve
                item= {this.props.item}
                buttonLabel={this.props.buttonLabel}/>
        </div>
    );
  }
}

class ItemReserve extends Component {
    constructor(props){
        super(props);
        this.state = {
            item_id: this.props.item.item_id,
            customer_id: AuthChecker.uid,
            pick_up_date: "12/12/18",
            description: "Non Profit",
            order_status: "Requested",
            reserved_status: this.props.item.reserved_status,
            buttonText: '',
        }
    }

    componentDidMount(){

        let buttonText = this.props.buttonLabel;
        this.setState({
            buttonText: buttonText,
        })
    }

    reserveItem = (e) => {
        fetch('/items/reserve/' + this.state.item_id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                item_id: this.state.item_id,
                customer_id: this.state.customer_id,
                pick_up_date: this.state.pick_up_date,
                description: this.state.description,
                order_status: this.state.order_status,
                reserved_status: this.state.reserved_status,
            })
        }).then((res) => {
            console.log(res);
            return res.json();
        }).then((data) => {
            this.setState({
                reserved_status: true,

                buttonText: "Reserved"

            });

        }).catch((err) => {
            console.log('error', err);
        })
    };

    render() {
        return (
            <button
                onClick={this.reserveItem}
                disabled={this.state.reserved_status}>{this.state.buttonText}

            </button>
        );
    }
}



export default ItemBox;
