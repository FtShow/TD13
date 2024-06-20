import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todoListAPI} from "../api/api";

export default {
    title: 'API',
}
const config = {
    withCredentials: true,
    headers: {
        "API-KEY": "9075fb11-bbe8-406e-883a-30df5808daaa"
    }
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       todoListAPI.getTodoLists().then(r => setState(r.data))
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.createTodo('NEW TO').then(r => setState(r.data))

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '5379745d-4831-4db2-a76d-1e25c9b1d36c'
        todoListAPI.deleteTodo(todoId).then(r => setState(r.data))

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '41dc4f26-7cb7-49dc-a07e-9ec0fe3c35ec'
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, {title: 'NEEEEW'}, config)
        promise.then((response) => {
            setState(response.data)

        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}