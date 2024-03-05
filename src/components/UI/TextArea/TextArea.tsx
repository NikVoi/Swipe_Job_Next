import { FC } from 'react'
import styles from './TextArea.module.scss'

interface IAreaProps {
	label: string
	placeholder: string
}

const TextArea: FC<IAreaProps> = ({ label, placeholder }) => {
	return (
		<fieldset className={styles.wrapper}>
			<label className={styles.label} htmlFor='textarea'>
				{label}
			</label>
			<textarea
				className={styles.textarea}
				placeholder={placeholder}
			></textarea>
		</fieldset>
	)
}

export default TextArea
