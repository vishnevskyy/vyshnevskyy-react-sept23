import React from 'react';
import {useAppReducer} from "../../hooks/useAppReducer";
import {Dogs} from "./Dogs/Dogs";
import {Cats} from "./Cats/Cats";

const Pets = () => {
    const [state] = useAppReducer(value => value.petReducer)
    return (
        <div>
            <Cats state={state}/>
            <hr/>
            <Dogs state={state}/>
        </div>
    );
};

export {Pets};