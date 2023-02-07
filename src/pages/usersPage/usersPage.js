import React from 'react';
import {Users} from "../../components/Users/Users";
import {HeaderUsers} from "../../components/Headers/HeaderUsers";

const UsersPage = () => {
    return (
        <div>
            <HeaderUsers/>
            <hr/>
            <Users/>
        </div>
    );
};

export {UsersPage};