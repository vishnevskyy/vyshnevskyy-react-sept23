import React from 'react';
import {useSelector} from "react-redux";

const HeaderUsers = () => {
    const {selectedUser} = useSelector(state => state.users)
    return (
        <div>{selectedUser &&<div>
            <div>id:{selectedUser.id}</div>
            <div>name:{selectedUser.name}</div>
            <div>username:{selectedUser.username}</div>
            <div>email:{selectedUser.email}</div>
        </div>
            }</div>
    );
};

export {HeaderUsers};