import React from 'react';
import {Outlet} from "react-router-dom";
import {Comments} from "../../components/CommentsComponents/Comments/Comments";

const CommentsPage = () => {
    return (
        <div>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};