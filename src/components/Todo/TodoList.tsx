import React, { FC, useState } from 'react'

type Todo = {
	id: number
	text: string
	isCompleted: boolean
}

const TodoList: FC = () => {

	const [todos, setTodos] = useState<Todo[]>([])
	const [inputValue, setInputValue] = useState<string>('')

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const handleAddTodo = () => {
		if(inputValue.trim() === '') return
		const newTodo: Todo = {
			id: todos.length + 1,
			text: inputValue,
			isCompleted: false
		}
	}
	return (
		<>
			<h1>Todo List</h1>
			<input type="text" value={inputValue} onChange={handleInputChange} />
			<button onClick={handleAddTodo}>Add todo</button>
		</>
	)
}

export default TodoList