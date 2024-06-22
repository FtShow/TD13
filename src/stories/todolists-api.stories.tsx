import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todoListAPI} from "../api/api";
import {log} from "util";

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
    return <div>{JSON.stringify(state)}<br/></div>
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

    return <div><br>{JSON.stringify(state)}</br></div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '7ef53040-89f6-4cef-bdcd-ba8397ffaead';
        const title = 'NEW TO2';

        todoListAPI.updateTodo(todoId, title).then(r => setState(r.data))

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '7ef53040-89f6-4cef-bdcd-ba8397ffaead';
        todoListAPI.getTask(todoId).then(r => console.log(r.data.items))
        todoListAPI.getTask(todoId).then(r => setState(r.data))
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
    }, [])
    return <div>{JSON.stringify(state)}<br/></div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '7ef53040-89f6-4cef-bdcd-ba8397ffaead';
        const newTaskTitle = 'new----task+++';

        todoListAPI.createTask(todoId, newTaskTitle).then(r => setState(r.data.data.item))
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
    }, [])
    return <div>{JSON.stringify(state)}<br/></div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '7ef53040-89f6-4cef-bdcd-ba8397ffaead';
        const taskId = 'bc083855-874f-4e70-a5e1-dc0e2e5387dc';
        const newTask = {
            title: '00000000000000000000000'
        }

        //  todoListAPI.createTask(todoId, newTaskTitle).then(r => setState(r.data.data.item))
        todoListAPI.updateTask(todoId, taskId, newTask).then(r => setState(r.data))
        todoListAPI.updateTask(todoId, taskId, newTask).then(r => console.log(r.data))
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
    }, [])
    return <div>{JSON.stringify(state)}<br/></div>

}

    export const DeleteTask = () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            const todoId = '7ef53040-89f6-4cef-bdcd-ba8397ffaead';
            const taskId = '4cb26386-4541-4b96-9e4d-d2dd4f7859fe';


            //  todoListAPI.createTask(todoId, newTaskTitle).then(r => setState(r.data.data.item))
            todoListAPI.deleteTask(todoId, taskId).then(r => setState(r.data))
            // здесь мы будем делать запрос и ответ закидывать в стейт.
            // который в виде строки будем отображать в div-ке
        }, [])
        return <div>{JSON.stringify(state)}<br/></div>
}
