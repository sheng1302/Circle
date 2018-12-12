import React, {Component} from "react";
import Image from 'react-image-resizer';

class ItemImage extends Component {
    render() {
        return (
            <Image 
            src={this.props.imageSource}
            height={ 400 }
            width={ 400 }
            />
        );
    }
}

export default ItemImage;