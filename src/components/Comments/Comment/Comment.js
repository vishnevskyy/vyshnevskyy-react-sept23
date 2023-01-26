import React from 'react';

const Comment = ({comment}) => {
    const {postId,id,email}=comment;
    return (
        <div>
            <div>{postId}</div>
            <div>{id}</div>
            <div>{email}</div>
        </div>
    );
};

export {Comment};