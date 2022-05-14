import React, { Component } from 'react';
import RestaurantNavbar from "./RestaurantNavbar";

class RestaurantHome extends Component {
    render() {
        return (
            <div>
                <RestaurantNavbar/>
                <h1 className='text'>Restaurant Home</h1>
            </div>
        );
    }
}

export default RestaurantHome;