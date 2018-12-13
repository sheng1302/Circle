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
                item={this.props.item}
                buttonLabel={this.props.buttonLabel}
                completePhrase={this.props.completePhrase}
                callFrom={this.props.callFrom}
                btnClassName={this.props.btnClassName}/>
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
            complete_status: false,
            buttonText: '',
        }
    }

    componentDidMount(){

        let buttonText = this.props.buttonLabel;
        this.setState({
            buttonText: buttonText,
        })
    }

    markItem = () => {  // This is suppose to send a mark complete to the backend server.

        // determine is marking an item for completion or reserve an item? What's the best way to do this ...
        console.log(this.props);
        if(this.props.callFrom === 'reservedItemList'){
            fetch('/order/mark/' + this.state.item_id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            }).then((res) => {
                console.log(res);
                return res.json();
            }).then((data) => {
                this.setState({
                    complete_status: true,
                    buttonText: this.props.completePhrase,

                });

            }).catch((err) => {
                console.log('error', err);
            })

        } else if(this.props.callFrom === 'itemList'){
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
                    complete_status: true,
                    buttonText: this.props.completePhrase

                });

            }).catch((err) => {
                console.log('error', err);
            })
        }

    };

    render() {
        return (
            <button
                className={this.props.btnClassName}
                onClick={this.markItem}
                disabled={this.state.complete_status}>{this.state.buttonText}

            </button>
        );
    }
}



export default ItemBox;
