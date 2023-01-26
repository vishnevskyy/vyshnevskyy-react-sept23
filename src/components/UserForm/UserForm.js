import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {UserValidator} from "../../validators/UserValidator";
import {UsersService} from "../../api/UsersApi/UsersApi";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all',resolver:joiResolver(UserValidator)})

    const submit = async (data) => {
        await UsersService.create(data).then(({data})=> setUsers((prevState)=> [...prevState,data]))
       reset()
    }

    return (<form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={"name"} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={"username"} {...register('username')}/>
            <button>Save</button>
        </form>
    );
};

export {UserForm};