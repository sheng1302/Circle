import {Component} from "react";
import React from "react";

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

export default ItemAddress;