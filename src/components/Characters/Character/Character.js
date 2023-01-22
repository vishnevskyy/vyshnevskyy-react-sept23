import React from 'react';

const Character = ({character}) => {
    let {id,name, status,species,gender,image} = character;
    return (
        <div>
            <div><h3>{id}</h3></div>
            <div><h3>{name}</h3></div>
            <div><h3>{status}</h3></div>
            <div><h3>{species}</h3></div>
            <div><h3>{gender}</h3></div>
            <div><img src={image} alt=""/></div>
        </div>
    );
};

export {Character};