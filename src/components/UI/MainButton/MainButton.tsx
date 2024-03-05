import { FC, ReactNode } from 'react'
import styles from './MainButton.module.scss'

interface ButtonProps {
	ico?: ReactNode
	text: string
}

const Button: FC<ButtonProps> = ({ ico, text }) => (
	<button className={styles.button}>
		{ico && <span>{ico}</span>}
		<span>{text}</span>
	</button>
)

export default Button
