import React from 'react';

const User = ({user,onSetUserId}) => {
    const {id,name} = user;
    return (
        <div>
            <div><h3>id:{id}</h3></div>
            <div><h3>name:{name}</h3></div>
            <button onClick={()=>onSetUserId(id)}>Get</button>
        </div>
    );
};

export {User};