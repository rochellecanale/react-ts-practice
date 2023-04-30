import axios from "axios"
import { ITodo } from "../interface/Todo"

interface IQueryKey {
	id: number,
	title: string
}

const todosAPI = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const fetchTodo = async ({ queryKey: [_, { id }] }: { queryKey: IQueryKey[] }) => {
	const response = await todosAPI.get(`/todos/${id}`)
	return response.data as ITodo
}

export default todosAPI