import React, { useState } from 'react'
import {
	Button,
	FormControl,
	FormLabel,
	Input
} from '@chakra-ui/react'
import axios from 'axios'

import { Todo } from '../../types/Todos'

interface AddTodoFormProps {
	onAddTodo: () => void
}

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {

	const BASE_URL = 'https://jsonplaceholder.typicode.com'
	const [text, setText] = useState<string>('')
	const [isFormSubmitting, setIsformSubmitting] = useState<boolean>(false)

	const handleSubmit = async () => {

		setIsformSubmitting(true)

		const payload: Partial<Todo> = {
			userId: 1,
			title: text,
			completed: false
		}

		axios.post(`${BASE_URL}/todos`,
			payload,
			{ 
				headers: { 
					'Content-type': 'application/json; charset=UTF-8' 
				} 
			} 
		).then(response => {
			console.log('response', response)
			setText('')
			setIsformSubmitting(false)
			onAddTodo()
		})
	}

	return (
		<>
			<FormControl>
				<FormLabel>Task</FormLabel>
				<Input
					value={text}
					onChange={(e) => {
						setText(e.target.value)
					}} 
					type="text" 
					required 
				/>

				<Button 
					isLoading={isFormSubmitting}
					onClick={handleSubmit}
					style={{ marginTop: '20px' }}
					colorScheme='teal' 
					size='md'
				>Submit</Button>

				<p>{text}</p>
			</FormControl>
		</>
	)
}

export default AddTodoForm