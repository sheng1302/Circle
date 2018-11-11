import React from 'react';
import '../style.css'

class ItemsList extends React.Component {
    render(){
        return(
            <div class="sidenav">
                <div className="dropdown">
                    <button className="dropbtn">Categories</button>
                    <div className="dropdown-content">
                        <a href="#">Category 1</a>
                        <a href="#">Category 2</a>
                        <a href="#">Category 3</a>
                    </div>
                </div>

                <label className="container">One
                    <input type="checkbox" checked/>
                </label>
                <label className="container">two
                    <input type="checkbox" checked/>
                </label>                 
            </div>
        );
    }
}

export default ItemsList;