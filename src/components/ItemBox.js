import React, { Component } from 'react';
import AuthChecker from './AuthChecker';


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
            <ItemReserve item= {this.props.item} />        
        </div>
    );
  }
}

class ItemTitle extends Component {
    render() {
        return (
            <h3 className="item-title">{this.props.title}</h3>
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
        let buttonText = (this.state.reserved_status ? "Reserved":"Reserve");
        this.setState({
            buttonText: buttonText,
        })
    }

    componentDidUpdate(prevState){
        if(this.state.reserved_status){

        }
    }

    reserveItem(){
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
            });

        }).catch((err) => {
            console.log('error', err);
        })
    }
    render() {
        return (
            <button onClick={this.reserveItem.bind(this)} disabled={this.state.reserved_status}>{this.state.buttonText}</button>
        );
    }
}

class ItemImage extends Component {
    render() {
        return (
        <img src={this.props.imageSource} max-height="100%" max-width="100%" alt="alternate item image" />
        );
    }
}

class ItemDescription extends Component {
    render() {
        return (
        <div className="description">
            <p>
            {this.props.description}
            </p>
        </div>
        );
    }
}

class ItemAddress extends Component {
    render() {
        return (
        <div className="address">
            <p>
            {this.props.address}
            </p>
        </div>
        );
    }
}

class Category extends Component {
    render() {
        return (
        <div className="category">
            {this.props.category}
        </div>
        );
    }
}

class DateModified extends Component {
    render() {
        return (
        <div className="date-modified">
            {this.props.date}
        </div>
        );
    }
}

export default ItemBox;
