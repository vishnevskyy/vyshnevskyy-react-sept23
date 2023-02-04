import React from 'react';

import css from './PetsPage.module.css'

import {PetsForm} from "../../components/PetsForm/PetsForm";
import {Pets} from "../../components/Pets/Pets";

const PetsPage = () => {
    return (
        <div className={css.PetsPage}>
            <PetsForm/>
            <hr/>
            <Pets/>
        </div>
    );
};

export default PetsPage;