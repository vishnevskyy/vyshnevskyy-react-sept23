import React from 'react';
import {useAppReducer} from "../../../hooks/useAppReducer";
import {petsActions} from "../../../reducers/PetsReducers";

const Pet = ({pet}) => {
    const {id,name,breed,age,kind}=pet;
    const [,dispatch]=useAppReducer(value=>value.petReducer)
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>breed:{breed}</div>
            <div>age:{age}</div>
            <div>kind:{kind}</div>
            <button hidden={kind==='Dog'} onClick={()=>dispatch(petsActions.DELETE_CAT(id))}>Delete cat</button>
            <button hidden={kind==='Cat'} onClick={()=>dispatch(petsActions.DELETE_DOG(id))}>Delete dog</button>
        </div>
    );
};

export default Pet;