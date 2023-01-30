import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services/carsService";

const CarForm = ({setCars,updateCar,setForceRender}) => {


    const {register, reset, handleSubmit,setValue} = useForm({mode: "all"})

useEffect(()=>{
    if (updateCar) {
        setValue('brand', updateCar.brand)
        setValue('price', updateCar.price)
        setValue('year', updateCar.year)
        console.log(updateCar)
    }
},[updateCar]);


    const submit = async (car) => {
        await carsService.create(car).then(({data}) =>
            setCars((prevState) => [...prevState, data])
        )
        reset()
    }



    const update = async (data) => {
        await carsService.updateById(updateCar.id,data).then(()=>{
            setForceRender((prev)=>prev+1)})
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Save</button>
            <button onClick={handleSubmit(update)}>Update Now</button>
        </form>
    );
};

export default CarForm;