import React from 'react';
import {PetsForm} from "../../components/PetsForm/PetsForm";
import {Pets} from "../../components/Pets/Pets";

const PetsPage = () => {
    return (
        <div>
            <PetsForm/>
            <hr/>
            <Pets/>
        </div>
    );
};

export default PetsPage;