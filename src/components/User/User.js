import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux/slices/usersSlice";

const User = ({user}) => {
    const dispatch=useDispatch();
    const{id,name,username,email}=user;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
<button onClick={()=>dispatch(userActions.setSelectedUser(user))}>Select</button>
        </div>
    );
};

export {User};