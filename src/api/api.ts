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
    updateTodo: (id: string, title: string) => {
        return instance.put(`/todo-lists/${id}`, {title})
    },
    getTask :(todolistId: string)=>{
        return instance.get<TaskList> (`/todo-lists/${todolistId}/tasks`)
    },
    createTask : (todolistId: string, title: string)=>{
        return instance.post<ResponseType<{item: TaskItem}>>(`/todo-lists/${todolistId}/tasks`, {title})
    },
    updateTask : (todolistId: string, taskId: string, newTask: Task)=>{
        return instance.put<ResponseType<{item: TaskItem}>>(`/todo-lists/${todolistId}/tasks/${taskId}`, newTask)
    },
    deleteTask : (todolistId: string, taskId: string)=>{
        return instance.delete<ResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
    },
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

type TaskItem = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: number
    deadline: number
    id: string
    todoListId: string
    order: number
    addedDate: number
}
type Task = {
    title: string
    description?: string
    completed?: boolean
    status?: number
    priority?: number
    startDate?: number
    deadline?: number
}
type TaskList = {
    error: string,
    totalCount: number,
    items: TaskItem[]
}

