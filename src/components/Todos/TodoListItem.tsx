import React, { FC } from 'react'
import { Tr, Td, Checkbox } from '@chakra-ui/react'

import { Todo } from '../../interfaces/Todo'

interface Props {
	todo: Todo
	toggleTodo: ToggleTodo
}

type ToggleTodo = (selectedTodo: Todo) => void

const TodoListItem: FC<Props> = ({ todo, toggleTodo }) => {

	return (
		<>
			<Tr>
				<Td>{todo.userId}</Td>
				<Td>{todo.id}</Td>
				<Td>{todo.title}</Td>
				<Td>
					<Checkbox
						onChange={() => {
							toggleTodo(todo)
						}}
						size='lg'
						colorScheme='orange'
						defaultChecked={todo.completed}
					/>
				</Td>
			</Tr>
		</>
	)
}

export default TodoListItem