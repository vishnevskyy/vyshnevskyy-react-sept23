import React, {useEffect, useState} from 'react';
import {todosService} from "../../../services/todosService/todosService";
import {Todo} from "../Todo/Todo";

import css from './Todos.module.css'

const Todos = () => {
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
       todosService.getAllTodos().then(({data})=>setTodos(data))
    },[])
    return (
        <div className={css.Todos}>
            {todos.map(todo=><Todo key={todo.id} todo={todo} setTodos={setTodos}/>)}
        </div>
    );
};
export {Todos};