import React, { useEffect } from 'react'
import axios from 'axios'

function Todos() {

	interface ICommonField {
		userId: number
		id: number
	}

	interface ITodos extends ICommonField {
		title: string
		completed: boolean
	}

	type Todo2 = ICommonField & {
		title: string
		completed: boolean
	}

	const fetchTodos = async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
		const results = await response.data as Todo2
		console.log('results', results)
		return results
	}

	useEffect(() => {
		fetchTodos()
	}, [])

	return (
		<>
			<h5>Todo list</h5>
		</>
	)
}

export default Todos