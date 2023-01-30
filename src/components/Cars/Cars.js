import React from 'react';
import {Car} from "../Car/Car";

const Cars = ({cars,setForceRender,setUpdateCar}) => {


    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setForceRender={setForceRender} setUpdateCar={setUpdateCar}/>)}

        </div>
    );
};

export {Cars};