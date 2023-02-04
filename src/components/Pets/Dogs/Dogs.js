import React from 'react';
import Pet from "../Pet/Pet";

const Dogs = ({state}) => {
    return (
        <div>{state.dogs.map(pet=><Pet key={pet.id} pet={{...pet}}/>)}
        </div>
    );
};

export {Dogs};