import React from 'react';
import {Album} from "../../components/AlbumsComponents/Album/Album";
import {Albums} from "../../components/AlbumsComponents/Albums/Albums";
import {Outlet} from "react-router-dom";

const AlbumsPage = () => {
    return (
        <div>
            <Albums/>
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};