import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux/slices/usersSlice";
import {User} from "../User/User";

const Users = () => {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.getAll());
    },[]);
    return (
        <div>{users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};