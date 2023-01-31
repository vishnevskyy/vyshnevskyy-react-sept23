import React from 'react';
import {carsService} from "../../services/carsService";
import {useForm} from "react-hook-form";

const Car = ({car,setForceRender,setUpdateCar}) => {
const {reset}=useForm({mode:'all'})


    const {id,brand,price,year}=car;

    const onDeleteCar = async (id) => {
      await carsService.deleteCar(id);
        setForceRender((prev)=>prev+1);
        reset()
    }


    return (
        <div>
            <div><h3>id:{id}</h3></div>
            <div><h3>brand:{brand}</h3></div>
            <div><h3>price:{price}</h3></div>
            <div><h3>year:{year}</h3></div>
            <button onClick={()=>onDeleteCar(id)}>Delete</button>
            <button onClick={()=> {
                setUpdateCar(car)
            }}>Update</button>
            <hr/>
        </div>
    );
}

export {Car};