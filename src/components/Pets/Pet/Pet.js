import css from './Pet.module.css'

import React from 'react';


import {useAppReducer} from "../../../hooks/useAppReducer";


import {petsActions} from "../../../reducers/PetsReducers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCat, faDog} from "@fortawesome/free-solid-svg-icons";

const Pet = ({pet}) => {
    const {id, name, breed, age, kind} = pet;
    const [, dispatch] = useAppReducer(value => value.petReducer)
    return (
        <div className={css.petsContainer}>
            <div className={css.icon}>{kind === 'Cat' && <FontAwesomeIcon icon={faCat}/>}

                {kind === 'Dog'&&<FontAwesomeIcon icon={faDog}/>}
            </div>
            <div className={css.infoContainer}>
                <div>
                    <div>id:{id}</div>
                    <div>name:{name}</div>
                    <div>breed:{breed}</div>
                    <div>age:{age}</div>
                    <div>kind:{kind}</div>
                </div>
                <div className={css.buttonStyle}>
                    <button hidden={kind === 'Cat'} onClick={() => dispatch(petsActions.DELETE_DOG(id))}>Delete dog
                    </button>
                    <button hidden={kind === 'Dog'} onClick={() => dispatch(petsActions.DELETE_CAT(id))}>Delete cat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pet;