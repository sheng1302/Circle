import React, {Component} from "react";

class ItemImage extends Component {
    render() {
        return (
            <img src={this.props.imageSource} max-height="100%" max-width="100%" alt="alternate item image" />
        );
    }
}

export default ItemImage;