import React, { Component } from 'react';
import RestaurantNavbar from "./RestaurantNavbar";

class RestaurantDetail extends Component {
    render() {
        return (
            <div>
                <RestaurantNavbar/>
                <h1 className='text'>Restaurant Detail</h1>
            </div>
        );
    }
}

export default RestaurantDetail;