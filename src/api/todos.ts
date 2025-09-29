import { api } from './client'

export type Todo = {
  id: string
  title: string
  notes?: string | null
  dueOn?: string | null
  done: boolean
  doneAt?: string | null
}

export type CreateTodoDto = {
  title: string
  notes?: string
  dueOn?: string // ISO date (yyyy-mm-dd)
}

export async function listTodos(){
  const { data } = await api.get<Todo[]>('/api/todos')
  return data
}

export async function createTodo(dto: CreateTodoDto){
  const { data } = await api.post<Todo>('/api/todos', dto)
  return data
}

export async function completeTodo(id: string){
  const { data } = await api.patch<Todo>(`/api/todos/${id}/complete`, {})
  return data
}