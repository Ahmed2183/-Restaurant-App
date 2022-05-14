import React from 'react';
import { Outlet } from 'react-router-dom';
import RestaurantLogin from './RestaurantLogin';

//Protect Route means user ka login hona sa phela baqi links pr koi bi data show na hoo
const RestaurantProtectedRoute = () => {
    
    //<Outlet/> menas RestaurantProtectedRoute  is the parent of all Route in App.js
    //Condition is if localStorage mai login ha then <Outlet/> means remaining links pr data show ho
    //else RestaurantLogin wala page sirf show ho har link  pr
    return localStorage.getItem('login') ? <Outlet/> : <RestaurantLogin/>
        
};

export default RestaurantProtectedRoute;