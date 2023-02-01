import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/usersService/usersService";
import {useParams} from "react-router-dom";

const UserTodosPage = () => {
    const{postId}=useParams()

    const [todos,setTodos]=useState([]);

    useEffect(()=>{
        usersService.getTodosByUserId(postId).then(({data})=>setTodos([...data]))
    },[postId])
    return (<div>{todos.map((todo)=><div>
        <div>id:{todo.id}</div>
        <div>userId:{todo.userId}</div>
        <div>title:{todo.title}</div>
        <div>completed:{todo.completed}</div>
    </div>)}
    </div>);
};

export {UserTodosPage};