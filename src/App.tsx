import React, { FC, useEffect } from 'react'
import './App.css'

const App:FC = () => {

	type APIResponse<T> = {
		message: string,
		results: T
	}

	type User = {
		id: number
		name: string
	}

	type Todo = {
		task: string,
		completed: boolean
	}

	type Student = {
		id: number,
		name: string,
		age: number,
		gender: string
	}

	type CreateStudent = Omit<Student, 'id' | 'email'>
	type UpdateUser = Partial<Omit<Student, 'id'>>
	type SomethingUser = Pick<Student, 'name' | 'gender'>
	type SomethingUser2 = Required<Student>

	const fetchUser = () => {
		const results = { id: 1, name: "Chelle" } as User
		return { message: 'Success', results } as APIResponse<User>
	}

	const fetchTodo = () => {
		const results = { task: 'Play valorant', completed: false } as Todo
		return { message: 'Pending', results } as APIResponse<Todo>
	}

	const request: Partial<Student> = {
		id: 1,
		name: "Chelle",
		gender: "male"
	}

	useEffect(() => {
		const user = fetchUser()
		const todo = fetchTodo()
		console.log('user', user)
		console.log('todo', todo)
	}, [])

	return (
		<div>

		</div>
	)
}

export default App
