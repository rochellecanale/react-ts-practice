import React, { FC, useState, useEffect, createContext } from 'react'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import axios from 'axios'
import TodoList from './components/Todos/TodoList'
import AddTodoForm from './components/Todos/AddTodoForm'

import { Todo } from './types/Todos'

interface TodoContextValue {
	todos: Todo[]
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoContext = createContext<TodoContextValue>({ todos: [], setTodos: () => {}})

const App: FC = () => {

	const [todos, setTodos] = useState<Todo[]>([])

	const BASE_URL = 'https://jsonplaceholder.typicode.com'

	const fetchTodos = async () => {
		const response = await axios.get(`${BASE_URL}/todos?_start=0&_limit=10&_sort=id&_order=asc`)
		setTodos(response.data)
	}

	const handleAddTodo = () => {
		fetchTodos()
	}

	useEffect(() => {
		fetchTodos()
	}, [])
	
	return (
		<>
			<Container
				maxW='container.xl'
				color='white'
			>
				<TodoContext.Provider value={{ todos, setTodos }}>
					<Grid
						templateColumns='repeat(2, 1fr)'
						gap={6}
					>
						<GridItem w='100%' h='full' color='gray.900'>
							<AddTodoForm onAddTodo={handleAddTodo}/>
						</GridItem>
						<GridItem w='100%' h='full' bg='facebook.100' color='gray.900'>
							<TodoList 
								data={todos}
								// handleTodo={(data: Todo[]) => setTodos(data)}
							/>
						</GridItem>
					</Grid>
				</TodoContext.Provider>
			</Container>
		</>
	)
}

export default App
