import React from 'react';
import { Navigate } from "react-router-dom"; //For Routing


const RestaurantLogout = () => {
    localStorage.clear(); //Clear Local Storage that is store in console after user login 
    return <Navigate to="/login"/>
};

export default RestaurantLogout;