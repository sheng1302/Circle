import React, {Component} from 'react';

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

export default ItemDescription;