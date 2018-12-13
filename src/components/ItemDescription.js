import React, {Component} from 'react';

class ItemDescription extends Component {
    render() {
        return (
        <div className="description">
            <p>
            <label>Posted By:</label> {this.props.description.username} <br/>
            <label>Email: </label> {this.props.description.email}
            </p>
        </div>
        );
    }
}

export default ItemDescription;