import React from 'react';
import {NavLink} from "react-router-dom";

import css from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <div className={css.MainHeader}>
            <div className={css.HomeButton}>
                <NavLink to={'/'}>home</NavLink>
            </div>
            <NavLink to={'users'}>users</NavLink>
            <NavLink to={'todos'}>todos</NavLink>
            <NavLink to={'albums'}>albums</NavLink>
            <NavLink to={'comments'}>comments</NavLink>
        </div>
    );
};

export {MainHeader};