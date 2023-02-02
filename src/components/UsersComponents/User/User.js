import React from 'react';
import {NavLink} from "react-router-dom";

const User = ({user,setUsers}) => {
    const{id,name,username}=user;
    console.log(user)
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>

            <NavLink to={`details/${id}`} state={user}>Details</NavLink>
            <hr/>
        </div>
    );
};

export {User};