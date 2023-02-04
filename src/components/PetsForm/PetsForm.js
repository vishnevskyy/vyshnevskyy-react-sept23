import React from 'react';
import {useForm} from "react-hook-form";
import {useAppReducer} from "../../hooks/useAppReducer";
import {petsActions} from "../../reducers/PetsReducers";

const PetsForm = () => {
    const{reset,register,handleSubmit}=useForm()
    const [,dispatch]=useAppReducer(value=>value.petReducer)

    const saveCat = (item) => {
    dispatch(petsActions.ADD_CAT(item))
        reset()
    };

    const saveDog = (item) => {
        dispatch(petsActions.ADD_DOG(item))
        reset()
    };

    return (
        <form>
            <input type="text" placeholder={'name'}{...register('name')}/>
            <input type="text" placeholder={'breed'}{...register('breed')}/>
            <input type="text" placeholder={'age'}{...register('age')}/>
            <button onClick={handleSubmit(saveCat)}>Save as Cat</button>
            <button onClick={handleSubmit(saveDog)}>Save as Dog</button>
        </form>
    );
};

export {PetsForm};