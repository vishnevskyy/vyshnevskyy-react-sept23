import React, {useEffect, useState} from 'react';
import {getUsers} from "../../../api/usersApi/usersApi";
import {User} from "./User/User";
import {UserDetails} from "./User/UserDetails/UserDetails";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [UserId,setUserId]=useState(null);
    useEffect(() => {
        getUsers().then((resp) => setUsers(resp))
    }, [])
    return (
        <div>
            <UserDetails UserId={UserId}/>
            {users.map((user)=><User key={user.id} user={user} onSetUserId={setUserId}/>)}
        </div>
    );
};

export default Users;