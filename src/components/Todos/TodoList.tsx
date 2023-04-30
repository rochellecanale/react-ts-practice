import React, { FC } from 'react'
import axios from 'axios'
import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'

import { Todo } from '../../types/Todos'
import TodoListItem from './TodoListItem'

import { TodoContext } from '../../App'

interface Props {
	// handleTodo: (data: Todo[]) => void
	data: Todo[]
}

const TodoList:FC<Props> = ({ data: todos }) => {

	// const { setTodos } = useContext(TodoContext)

	const BASE_URL = 'https://jsonplaceholder.typicode.com'

	const toggleTodo = (selectedTodo: Todo) => {
		
		const updateDataPayload = {
			...selectedTodo,
			completed: !selectedTodo.completed
		}

		axios.put(`${BASE_URL}/todos/${selectedTodo.id}`, 
			updateDataPayload,
			{ 
				headers: { 
					'Content-type': 'application/json; charset=UTF-8' 
				} 
			} 
		).then(response => {
			console.log('response', response)
		})

	}

	return (
		<>
			<h5>Todo List</h5>
			<TableContainer>
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th>User ID</Th>
							<Th>ID</Th>
							<Th>Title</Th>
							<Th>Completed</Th>
						</Tr>
					</Thead>
					<Tbody>
						{
							todos.map((todo, index) => (
								<TodoListItem 
									todo={todo} 
									toggleTodo={toggleTodo}
									key={index} 
								/>
							))
						}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	)
}

export default TodoList