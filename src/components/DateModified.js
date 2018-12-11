import {Component} from "react";
import React from "react";

class DateModified extends Component {
    render() {
        return (
            <div className="date-modified">
                {this.props.date}
            </div>
        );
    }
}

export default DateModified;