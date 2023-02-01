import React from 'react';
import {Outlet, useParams} from "react-router-dom";
import {UserActions} from "../../components/UsersComponents/UserActions/UserActions";

const UserLayout = () => {
     const postId=useParams();
    return (
        <div>
            <UserActions postId={postId}/>
            <Outlet/>
        </div>
    );
};

export {UserLayout};