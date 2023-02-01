import React, {useEffect, useState} from 'react';


import {usersService} from "../../../services/usersService/usersService";


import {User} from "../User/User";


import css from './Users.module.css'
const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        usersService.getAllUsers().then(({data})=>setUsers(data))
    },[])
    return (
        <div className={css.Users}>
            {users.map(user=><User key={user.id} user={user} setUsers={setUsers}/>)}
        </div>
    );
};

export {Users};