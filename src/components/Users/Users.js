import React, {useEffect, useState} from 'react';
import {UsersService} from "../../api/UsersApi/UsersApi";
import {User} from "./User/User";

const Users = ({users,onDeleteUser}) => {

    return (
        <form>
            {
                users.map(user=><User key={user.id} user={user}/>)
            }
        </form>
    );
};

export {Users};