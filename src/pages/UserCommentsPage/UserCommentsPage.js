import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {usersService} from "../../services/usersService/usersService";

const UserCommentsPage = () => {
    const{postId}=useParams()

    const [comments,setComments]=useState([]);

    useEffect(()=>{
        usersService.getCommentsByUserId(postId).then(({data})=>setComments([...data]))
    },[postId])
    return (<div>{comments.map((comment)=><div>
        <div>postId:{comment.postId}</div>
        <div>id:{comment.id}</div>
        <div>name:{comment.name}</div>
        <div>email:{comment.email}</div>
        <div>body:{comment.body}</div>
    </div>)}
    </div>);
};
export {UserCommentsPage};