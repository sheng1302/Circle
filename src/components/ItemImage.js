import React, {Component} from "react";
import '../styles/ItemBox.css';

class ItemImage extends Component {
    render() {
        return (
            <img
                className="item-image"
            src={this.props.imageSource}
            />
        );
    }
}

export default ItemImage;