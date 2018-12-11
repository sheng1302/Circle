import React, { Component } from 'react';

class ItemTitle extends Component {
    render() {
        return (
            <h3 className="item-title">{this.props.title}</h3>
        );
    }
}

export default ItemTitle;