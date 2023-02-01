import React from 'react';
import {NavLink} from "react-router-dom";

const UserActions = ({postId}) => {
    return (
        <div>
                <NavLink to={'todos'} state={postId}>todos</NavLink>
                <NavLink to={'albums'} state={postId}>albums</NavLink>
                <NavLink to={'comments'} state={postId}>comments</NavLink>
        </div>
    );
};

export {UserActions};