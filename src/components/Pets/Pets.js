import css from './Pets.module.css'

import React from 'react';

import {useAppReducer} from "../../hooks/useAppReducer";

import {Dogs} from "./Dogs/Dogs";
import {Cats} from "./Cats/Cats";

const Pets = () => {
    const [state] = useAppReducer(value => value.petReducer)
    return (
        <div className={css.petsContainer}>
           <div className={css.list}>
               <Cats state={state}/>
           </div>
           <div className={css.list}>
               <Dogs state={state}/>
           </div>
        </div>
    );
};

export {Pets};