import React from 'react';
import {useForm} from "react-hook-form";
import {commentsService} from "../../api/CommentsApi";

const CommentsForm = ({setComments}) => {
    const {register, reset, handleSubmit} = useForm({mode: 'all'})

    const submit = async (data) => {
        await commentsService.create({data}).then(({data})=>setComments((prevState)=>[...prevState,data]))
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>Save</button>
        </form>);
};

export {CommentsForm};