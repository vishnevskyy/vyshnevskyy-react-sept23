import React from 'react';

import {NavLink, Outlet} from "react-router-dom";

import css from './MainLayout.module.css'
const MainLayout = () => {
    return (
        <div>
           <div className={css.Header}>
               <NavLink to={'/users'}>USERS</NavLink>
               <NavLink to={'/cars'}>CARS</NavLink>
           </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};