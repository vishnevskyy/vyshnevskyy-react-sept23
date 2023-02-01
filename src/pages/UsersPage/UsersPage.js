import React from 'react';

import {Outlet} from "react-router-dom";

import {Users} from "../../components/UsersComponents/Users/Users";

import css from './UsersPage.module.css'

const UsersPage = () => {
    return (
        <div className={css.UsersPage}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};