import React, {Component} from "react";
import '../styles/ItemBox.css';

class ItemImage extends Component {
    render() {
        return (
            <img
                className={`item-image ${this.props.imgClassName}`}
            src={this.props.imageSource}
            />
        );
    }
}

export default ItemImage;