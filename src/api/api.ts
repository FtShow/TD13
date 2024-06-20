import axios from "axios";

const instance = {
    withCredentials: true,
    headers: {
        "API-KEY": "9075fb11-bbe8-406e-883a-30df5808daaa"
    }
}
export const todoListAPI = {
    getTodoLists: () => {
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists')
    },
    createTodo: (title: string) => {
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title})
    },
    deleteTodo: () => {

    },
    updateTodo: () => {

    }
}