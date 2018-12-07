import React, {Component} from "react";

class Donate extends Component {

    componentDidMount() {
        fetch('/donate')
        .then((resp) => {
            return resp.json();
        }).then(result) => {
            this.setState({
                
            })
        }
    }

    render() {

    }
}

export default Donate;