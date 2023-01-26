import React, {useEffect, useState} from 'react';
import {CommentsForm} from "../CommentsForm/CommentsForm";
import {commentsService} from "../../api/CommentsApi";
import {Comment} from "./Comment/Comment";

const Comments = () => {
     const [comment,setComments]=useState([])
    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    },[])
    return (
        <div>
            <CommentsForm setComments={setComments}/>
            <hr/>
            <div>
                {comment.map(comment=><Comment key={comment.id} comment={comment}/> )}
            </div>
        </div>
    );
};

export {Comments};