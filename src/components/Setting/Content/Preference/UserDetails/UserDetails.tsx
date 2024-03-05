'use client'

import { useState } from 'react'

import Input from '@/components/UI/Input/Input'
import TextArea from '@/components/UI/TextArea/TextArea'
import styles from './UserDetails.module.scss'

export default function UserDetails() {
	const [inputValue, setInputValue] = useState('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	return (
		<div className={styles.userDetails}>
			<div className={styles.location}>
				<Input
					placeholder='Введите что-то'
					title='Location'
					value={inputValue}
					onChange={handleChange}
				/>
			</div>

			<TextArea label='Description' placeholder="type you're resume" />
		</div>
	)
}
