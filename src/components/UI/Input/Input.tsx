import { ChangeEvent, FC } from 'react'
import styles from './Input.module.scss'

interface IInput {
	placeholder: string
	type?: string
	value: string
	title: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = ({
	placeholder,
	title,
	type = 'text',
	value,
	onChange,
}) => {
	return (
		<div className={styles.wrapper}>
			<label className={styles.label}>{title}</label>
			<input
				className={styles.input}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

export default Input
