'use client'

import { useState } from 'react'

import Input from '@/components/UI/Input/Input'
import styles from './UserName.module.scss'

export default function UserName() {
	const [inputValue, setInputValue] = useState('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	return (
		<div className={styles.userName}>
			<Input
				placeholder='Введите что-то'
				title='First Name'
				value={inputValue}
				onChange={handleChange}
			/>

			<Input
				placeholder='Введите что-то'
				title='Last Name'
				value={inputValue}
				onChange={handleChange}
			/>

			<Input
				placeholder='Введите что-то'
				title='Middle Name'
				value={inputValue}
				onChange={handleChange}
			/>
		</div>
	)
}
