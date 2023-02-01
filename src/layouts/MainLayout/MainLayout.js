import React from 'react';
import {Outlet} from "react-router-dom";
import {MainHeader} from "../../components/MainHeader/MainHeader";

const MainLayout = () => {
    return (
        <div>
           <MainHeader/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};