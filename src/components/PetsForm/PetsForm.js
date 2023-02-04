import React from 'react';

import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks/useAppReducer";
import {petsActions} from "../../reducers/PetsReducers";
import css from './PetsForm.module.css'

const PetsForm = () => {
    const {reset, register, handleSubmit} = useForm()
    const [, dispatch] = useAppReducer(value => value.petReducer)

    const saveCat = (item) => {
        dispatch(petsActions.ADD_CAT(item))
        reset()
    };

    const saveDog = (item) => {
        dispatch(petsActions.ADD_DOG(item))
        reset()
    };

    return (
        <div className={css.header}>
            <img className={css.image} src="https://png2.cleanpng.com/sh/b7ee9538377c8d07d7d1131a73271e2e/L0KzQYm3U8A0N6pwiZH0aYP2gLBuTfJqa5l0hp9vcnn2dX7AiPl0c5Z3i595dYDziX7qjPlxNZJ3jJ95dYDziX7zjBdwNWZmUdMBZEK5RYTrgsA2NmI2TKQ6OEe3QYa5UMA3QWo3TqU9M0WxgLBu/kisspng-bichon-frise-whiskers-puppy-clip-art-puppy-logo-5a9a6d2653db05.1142187415200699263435.png" alt=""/>
            <form className={css.PetsForm}>
                <div className={css.inputContainer}>
                    <input type="text" placeholder={'name'}{...register('name')}/>
                    <input type="text" placeholder={'breed'}{...register('breed')}/>
                    <input type="text" placeholder={'age'}{...register('age')}/>
                </div>
                <div className={css.buttonContainer}>
                    <button onClick={handleSubmit(saveCat)}>Save as Cat</button>
                    <button onClick={handleSubmit(saveDog)}>Save as Dog</button>
                </div>
            </form>
        </div>
            );
            };

            export {PetsForm};
