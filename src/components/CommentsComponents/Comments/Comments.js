import React, {useEffect, useState} from 'react';

import {commentsService} from "../../../services/commentsService/commentsService";

import {Comment} from "../Comment/Comment";

import css from './Comments.module.css'

const Comments = () => {
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        commentsService.getAllComments().then(({data})=>setComments(data))
    },[])
    return (
        <div className={css.Comments}>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};
export {Comments};