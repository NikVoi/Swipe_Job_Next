import { FC } from 'react'
import styles from './Button.module.scss'

type Props = {
	text: string
}

const Button: FC<Props> = ({ text }) => {
	return <button className={styles.button}>{text}</button>
}

export default Button
