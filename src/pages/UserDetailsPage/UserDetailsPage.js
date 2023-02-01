import React, {useEffect, useState} from 'react';
import {NavLink, Outlet, useLocation, useParams} from "react-router-dom";
import {UserDetails} from "../../components/UsersComponents/UserDetails/UserDetails";
import {usersService} from "../../services/usersService/usersService";

const UserDetailsPage = () => {
    const {postId} = useParams();
    const {state} = useLocation();
    const [user,setUser]=useState(null);

        useEffect(()=> {
            if (state){
            setUser({...state})
            }else{
                usersService.getUserById({postId}).then(({data})=> {
                    setUser(data)
                    console.log(data)
                })
            }
        },[postId])
    console.log(state)
    console.log(user)
    return (
        <div>
            <div>
                {user && <UserDetails user={user}/>}
            </div>
            <NavLink to={'actions'} state={postId}>Actions</NavLink>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};