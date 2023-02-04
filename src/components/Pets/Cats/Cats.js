import React from 'react';
import Pet from "../Pet/Pet";

const Cats = ({state}) => {
    return (
        <div>{state.cats.map(pet=><Pet key={pet.id} pet={{...pet}}/>)}
        </div>
    );
};

export {Cats};