import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1",
    withCredentials: true,
    headers: {
        "API-KEY": "9075fb11-bbe8-406e-883a-30df5808daaa"
    }
})

export const todoListAPI = {
    getTodoLists: () => {
        return instance.get<ResponseType>('/todo-lists')
    },
    createTodo: (title: string) => {
        return instance.post<ResponseType>('/todo-lists', {title: title})
    },
    deleteTodo: (id: string) => {
        return instance.delete<ResponseType<{ item: TodoListType }>>(`/todo-lists/${id}`)
    },
    updateTodo: (id: string, newTodo: string) => {
        return instance.put(`/todo-lists/${id}`, {newTodo})
    }
}

type TodoListType = {
    "id": string,
    "title": string,
    "addedDate": string,
    "order": number
}
type CreateTodoType = {
    resultCode: number,
    messages: string[],
    fieldsErrors: [],
    data: {
        item: TodoListType
    }
}
type deleteTodo = {
    data: {},
    fieldsErrors: [],
    messages: string[],
    resultCode: number,
}
type ResponseType<T = {}> = {
    data: T,
    fieldsErrors: [],
    messages: string[],
    resultCode: number,
}
