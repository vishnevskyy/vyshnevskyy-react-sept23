import React from 'react';
import {Character} from "./Character/Character";

const Characters = ({characters}) => {
    return (
        <div>
            {characters.map(character=>(<Character key={character.id} character={character}/>))}
        </div>
    );
};

export {Characters};